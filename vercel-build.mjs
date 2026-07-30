import { execFileSync } from 'node:child_process'

const targets = [
  { match: ['prj_3k5SM3NWPBV26ezfU2q0Tel5MM2T', 'mula-ai-tech', 'ai.mulagroup.eu'], filter: '@mula/ai' },
  { match: ['prj_BQTBp463SejvZ6nzSVcssUhaDiXd', 'mula-digital', 'digital.mulagroup.eu'], filter: '@mula/digital' },
  { match: ['prj_9AuWjpozdWaQ655cDZ9MlGutX77y', 'mula-ecom', 'ecommerce.mulagroup.eu'], filter: '@mula/ecommerce' },
  { match: ['prj_uaK8Ax5NDL2Lts0lgx9YuAnWTmNi', 'mula-marketing', 'marketing.mulagroup.eu'], filter: '@mula/marketing' },
  { match: ['prj_lWTlYlf3xiePu0u4omqDQ84lAJGQ', 'mula-cyber', 'cyber.mulagroup.eu'], filter: '@mula/cyber' },
  { match: ['prj_IsbP90SNGl89Abn0dkA7871y1Jzf', 'mula-construction', 'construction.mulagroup.eu'], filter: '@mula/construction' },
  { match: ['prj_nI6b4CI1Q51Ht4lTKR89tBv7MdJi', 'mula-innovation', 'innovation.mulagroup.eu'], filter: '@mula/innovation' },
  { match: ['prj_TuVNkVu3aMtBlDIRGsiMMvuo7y9B', 'mula-platform', 'mulagroup.eu'], filter: '@mula/main' },
]

const hints = [
  process.env.VERCEL_PROJECT_ID,
  process.env.VERCEL_PROJECT_PRODUCTION_URL,
  process.env.VERCEL_URL,
  process.env.VERCEL_BRANCH_URL,
].filter(Boolean).join(' ')

const target = targets.find(({ match }) => match.some((value) => hints.includes(value))) ?? targets.at(-1)

console.log(`Vercel build target: ${target.filter}`)
console.log(`Vercel build hints: ${hints || '<none>'}`)

execFileSync('npx', ['turbo', 'build', `--filter=${target.filter}`], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
})
