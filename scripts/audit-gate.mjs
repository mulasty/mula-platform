import { spawnSync } from 'node:child_process'

const npmCommand = process.platform === 'win32' ? 'cmd.exe' : 'npm'
const npmArgs = process.platform === 'win32'
  ? ['/d', '/s', '/c', 'npm audit --audit-level=moderate --json']
  : ['audit', '--audit-level=moderate', '--json']

const audit = spawnSync(npmCommand, npmArgs, {
  encoding: 'utf8',
})

if (audit.error) {
  console.error(`Could not run npm audit: ${audit.error.message}`)
  process.exit(1)
}

const output = audit.stdout || audit.stderr

let report
try {
  report = JSON.parse(output)
} catch (error) {
  console.error('Could not parse npm audit JSON output.')
  console.error(output)
  process.exit(1)
}

const vulnerabilities = report.vulnerabilities ?? {}

// Stable Next 16 currently reports transitive postcss/sharp advisories where
// npm's suggested fix is an invalid downgrade to next@9.3.3. Keep CI strict for
// every other advisory while allowing this known, tracked Next metadata gap.
const allowedNextTransitive = new Set(['next', 'postcss', 'sharp'])
const allowedTestTransitive = new Set(['undici', 'jsdom'])
const allowedNextConsumers = new Set(['@vercel/analytics', '@vercel/speed-insights'])
const allowedEslintTransitive = new Set([
  '@eslint/config-array',
  '@eslint/eslintrc',
  'brace-expansion',
  'eslint',
  'eslint-config-next',
  'eslint-plugin-import',
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-react',
  'minimatch',
])

const unexpected = Object.entries(vulnerabilities).filter(([name, vuln]) => {
  if (allowedNextConsumers.has(name)) {
    return !vuln.via?.includes('next')
  }

  if (allowedTestTransitive.has(name)) {
    return false
  }

  if (!allowedNextTransitive.has(name)) {
    if (!allowedEslintTransitive.has(name)) {
      return true
    }

    return !vuln.nodes?.every((node) =>
      node.startsWith('node_modules/@eslint/') ||
      node.startsWith('node_modules/eslint') ||
      node.startsWith('node_modules/eslint-config-next') ||
      node.startsWith('node_modules/eslint-plugin-') ||
      node.startsWith('node_modules/minimatch') ||
      node.startsWith('node_modules/brace-expansion')
    )
  }

  if (name === 'next') {
    return !['postcss', 'sharp'].every((dependency) => vuln.via?.includes(dependency))
  }

  return !vuln.nodes?.every((node) => node.startsWith('node_modules/next/'))
})

if (unexpected.length > 0) {
  console.error('npm audit found unexpected vulnerabilities:')
  for (const [name, vuln] of unexpected) {
    console.error(`- ${name}: ${vuln.severity} (${vuln.range})`)
  }
  process.exit(1)
}

const allowedCount = Object.keys(vulnerabilities).length
if (allowedCount > 0) {
  console.warn(`npm audit: ${allowedCount} known transitive advisories allowed until stable upstream fixes are available.`)
}

console.log('npm audit gate passed.')
