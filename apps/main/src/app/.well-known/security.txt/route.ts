export const runtime = 'edge'

const SECURITY_TXT = `Contact: mailto:security@mulagroup.eu
Contact: https://mulagroup.eu/contact
Preferred-Languages: pl, en
Policy: https://mulagroup.eu/polityka-prywatnosci
Expires: 2027-08-19T00:00:00.000Z
`

export function GET() {
  return new Response(SECURITY_TXT, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}