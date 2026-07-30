import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()

const apps = [
  'ai',
  'construction',
  'cyber',
  'digital',
  'ecommerce',
  'innovation',
  'main',
  'marketing',
]

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'))
  } catch (error) {
    throw new Error(`${path}: ${error.message}`)
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message)
  }
}

const rootConfigPath = join(root, 'vercel.json')
const rootConfig = readJson(rootConfigPath)
const rootBuildKeys = ['buildCommand', 'installCommand', 'outputDirectory', 'framework']

for (const key of rootBuildKeys) {
  assert(
    !(key in rootConfig),
    `Root vercel.json must not contain ${key}. Build settings belong in apps/<name>/vercel.json.`,
  )
}

assert(Array.isArray(rootConfig.crons), 'Root vercel.json must keep the production health cron.')
assert(rootConfig.crons.length === 1, 'Root vercel.json must define exactly one cron.')
assert(rootConfig.crons[0]?.path === '/api/cron/health', 'Root cron path must be /api/cron/health.')
assert(rootConfig.crons[0]?.schedule === '*/5 * * * *', 'Root cron schedule must be */5 * * * *.')

for (const app of apps) {
  const configPath = join(root, 'apps', app, 'vercel.json')
  const config = readJson(configPath)
  const expectedFilter = `@mula/${app}`
  const expectedOutput = `apps/${app}/.next`

  assert(
    config.buildCommand === `npx turbo build --filter=${expectedFilter}`,
    `${configPath}: expected buildCommand for ${expectedFilter}.`,
  )
  assert(config.installCommand === 'npm ci', `${configPath}: installCommand must be npm ci.`)
  assert(config.outputDirectory === expectedOutput, `${configPath}: outputDirectory must be ${expectedOutput}.`)
}

console.log('Vercel config validation passed.')
