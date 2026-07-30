const checks = [
  { name: 'main apex', url: 'https://mulagroup.eu', includes: ['MULA'] },
  { name: 'main www', url: 'https://www.mulagroup.eu', includes: ['MULA'] },
  { name: 'guardian landing domain', url: 'https://guardian.mulagroup.eu', includes: ['MULA Guardian AI'] },
  { name: 'guardian landing route', url: 'https://guardian.mulagroup.eu/guardian', includes: ['MULA Guardian AI'] },
  {
    name: 'guardian login redirect',
    url: 'https://guardian.mulagroup.eu/login',
    includes: ['Guardian'],
    finalUrlStartsWith: 'https://app.guardian.mulagroup.eu/login',
  },
  { name: 'guardian app login', url: 'https://app.guardian.mulagroup.eu/login', includes: ['Guardian'] },
  { name: 'AI subdomain', url: 'https://ai.mulagroup.eu' },
  { name: 'digital subdomain', url: 'https://digital.mulagroup.eu' },
  { name: 'ecommerce subdomain', url: 'https://ecommerce.mulagroup.eu' },
  { name: 'marketing subdomain', url: 'https://marketing.mulagroup.eu' },
  { name: 'cyber subdomain', url: 'https://cyber.mulagroup.eu' },
  { name: 'construction subdomain', url: 'https://construction.mulagroup.eu' },
  { name: 'innovation subdomain', url: 'https://innovation.mulagroup.eu' },
  {
    name: 'main health cron endpoint',
    url: 'https://mulagroup.eu/api/cron/health',
    json: {
      status: 'ok',
      service: 'mula-platform-main',
      runtime: 'edge',
    },
  },
]

const failures = []

async function runCheck(check) {
  const startedAt = Date.now()
  const response = await fetch(check.url, {
    redirect: 'follow',
    signal: AbortSignal.timeout(30_000),
  })
  const duration = Date.now() - startedAt
  const body = await response.text()

  if (response.status !== 200) {
    throw new Error(`expected 200, got ${response.status}`)
  }

  if (check.finalUrlStartsWith && !response.url.startsWith(check.finalUrlStartsWith)) {
    throw new Error(`expected final URL to start with ${check.finalUrlStartsWith}, got ${response.url}`)
  }

  for (const fragment of check.includes ?? []) {
    if (!body.includes(fragment)) {
      throw new Error(`expected response body to include ${JSON.stringify(fragment)}`)
    }
  }

  if (check.json) {
    let parsed
    try {
      parsed = JSON.parse(body)
    } catch (error) {
      throw new Error(`expected JSON response: ${error.message}`)
    }

    for (const [key, expected] of Object.entries(check.json)) {
      if (parsed[key] !== expected) {
        throw new Error(`expected JSON ${key}=${JSON.stringify(expected)}, got ${JSON.stringify(parsed[key])}`)
      }
    }
  }

  console.log(`✓ ${check.name} ${response.status} ${duration}ms -> ${response.url}`)
}

for (const check of checks) {
  try {
    await runCheck(check)
  } catch (error) {
    failures.push({ check, error })
    console.error(`✗ ${check.name} (${check.url}): ${error.message}`)
  }
}

if (failures.length > 0) {
  console.error(`Production smoke failed: ${failures.length}/${checks.length} checks failed.`)
  process.exit(1)
}

console.log(`Production smoke passed: ${checks.length}/${checks.length} checks passed.`)
