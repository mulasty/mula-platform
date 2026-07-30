const mainHeadline = 'Budujemy produkty AI i systemy operacyjne'

const sites = [
  {
    name: 'main apex',
    url: 'https://mulagroup.eu',
    title: 'Mula Group',
    includes: ['Budujemy produkty AI'],
    canonical: 'https://mulagroup.eu',
  },
  {
    name: 'main www',
    url: 'https://www.mulagroup.eu',
    title: 'Mula Group',
    includes: ['Budujemy produkty AI'],
    canonical: 'https://mulagroup.eu',
  },
  {
    name: 'AI subdomain',
    url: 'https://ai.mulagroup.eu',
    title: 'Mula AI',
    includes: ['Technologie AI i Automatyzacja Biznesu'],
    canonical: 'https://ai.mulagroup.eu',
    excludes: [mainHeadline],
  },
  {
    name: 'digital subdomain',
    url: 'https://digital.mulagroup.eu',
    title: 'Mula Digital',
    includes: ['Transformacja Cyfrowa'],
    canonical: 'https://digital.mulagroup.eu',
    excludes: [mainHeadline],
  },
  {
    name: 'ecommerce subdomain',
    url: 'https://ecommerce.mulagroup.eu',
    title: 'Mula E-Commerce',
    includes: ['E-Commerce i Handel Internetowy'],
    canonical: 'https://ecommerce.mulagroup.eu',
    excludes: [mainHeadline],
  },
  {
    name: 'marketing subdomain',
    url: 'https://marketing.mulagroup.eu',
    title: 'Mula Marketing',
    includes: ['Marketing Cyfrowy', 'który naprawdę działa'],
    canonical: 'https://marketing.mulagroup.eu',
    excludes: [mainHeadline, 'ktory naprawde dziala', 'Zwiekszamy zasieg'],
  },
  {
    name: 'cyber subdomain',
    url: 'https://cyber.mulagroup.eu',
    title: 'Mula Cyber',
    includes: ['Bezpieczeństwo to Fundament'],
    canonical: 'https://cyber.mulagroup.eu',
    excludes: [mainHeadline],
  },
  {
    name: 'construction subdomain',
    url: 'https://construction.mulagroup.eu',
    title: 'Mula Construction',
    includes: ['Konstrukcje i', 'Hale Stalowe'],
    canonical: 'https://construction.mulagroup.eu',
    excludes: [mainHeadline],
  },
  {
    name: 'innovation subdomain',
    url: 'https://innovation.mulagroup.eu',
    title: 'Mula Innovation',
    includes: ['Tworzymy technologie jutra'],
    canonical: 'https://innovation.mulagroup.eu',
    excludes: [mainHeadline],
  },
]

const checks = [
  ...sites.map((site) => ({ type: 'html', ...site })),
  ...sites.flatMap((site) => [
    {
      type: 'text',
      name: `${site.name} robots`,
      url: `${site.url}/robots.txt`,
      includes: [`Sitemap: ${site.url.replace('https://www.', 'https://')}/sitemap.xml`],
    },
    {
      type: 'text',
      name: `${site.name} sitemap`,
      url: `${site.url}/sitemap.xml`,
      includes: [site.url.replace('https://www.', 'https://')],
    },
    {
      type: 'asset',
      name: `${site.name} favicon`,
      url: `${site.url}/favicon.ico`,
    },
  ]),
  { type: 'html', name: 'guardian landing domain', url: 'https://guardian.mulagroup.eu', includes: ['MULA Guardian AI'] },
  { type: 'html', name: 'guardian landing route', url: 'https://guardian.mulagroup.eu/guardian', includes: ['MULA Guardian AI'] },
  {
    type: 'html',
    name: 'guardian login redirect',
    url: 'https://guardian.mulagroup.eu/login',
    includes: ['Guardian'],
    finalUrlStartsWith: 'https://app.guardian.mulagroup.eu/login',
  },
  { type: 'html', name: 'guardian app login', url: 'https://app.guardian.mulagroup.eu/login', includes: ['Guardian'] },
  {
    type: 'json',
    name: 'main health cron endpoint',
    url: 'https://mulagroup.eu/api/cron/health',
    json: {
      status: 'ok',
      service: 'mula-platform-main',
      runtime: 'edge',
    },
  },
  {
    type: 'html',
    name: 'construction stale o-nas redirect',
    url: 'https://construction.mulagroup.eu/o-nas',
    includes: ['Konstrukcje i', 'Hale Stalowe'],
  },
  {
    type: 'html',
    name: 'construction stale blog redirect',
    url: 'https://construction.mulagroup.eu/blog',
    includes: ['Konstrukcje i', 'Hale Stalowe'],
  },
  {
    type: 'html',
    name: 'construction stale privacy redirect',
    url: 'https://construction.mulagroup.eu/polityka-prywatnosci',
    finalUrlStartsWith: 'https://mulagroup.eu/polityka-prywatnosci',
    includes: ['Polityka prywatności'],
  },
]

const failures = []

function extractTitle(body) {
  return body.match(/<title>(.*?)<\/title>/is)?.[1]?.replace(/\s+/g, ' ').trim()
}

function extractCanonical(body) {
  return body.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1]
}

async function runCheck(check) {
  const startedAt = Date.now()
  const response = await fetch(check.url, {
    redirect: 'follow',
    signal: AbortSignal.timeout(30_000),
    headers: { 'user-agent': 'mula-production-smoke/1.0' },
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

  for (const fragment of check.excludes ?? []) {
    if (body.includes(fragment)) {
      throw new Error(`expected response body not to include ${JSON.stringify(fragment)}`)
    }
  }

  if (check.type === 'html') {
    const title = extractTitle(body)
    if (check.title && !title?.includes(check.title)) {
      throw new Error(`expected title to include ${JSON.stringify(check.title)}, got ${JSON.stringify(title)}`)
    }

    const canonical = extractCanonical(body)
    if (check.canonical && canonical !== check.canonical) {
      throw new Error(`expected canonical ${check.canonical}, got ${canonical ?? '<missing>'}`)
    }
  }

  if (check.type === 'asset') {
    const contentType = response.headers.get('content-type') ?? ''
    if (!contentType.includes('image/') && !contentType.includes('svg')) {
      throw new Error(`expected image content-type, got ${contentType || '<missing>'}`)
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
