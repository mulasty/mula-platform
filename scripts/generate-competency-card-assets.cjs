const fs = require('node:fs')
const path = require('node:path')
const sharp = require('sharp')

const outDir = path.join(__dirname, '..', 'public', 'images', 'competencies')

const competencies = [
  { slug: 'ai', color: '#3b82f6', motif: 'nodes' },
  { slug: 'digital', color: '#8b5cf6', motif: 'flow' },
  { slug: 'ecommerce', color: '#f59e0b', motif: 'channels' },
  { slug: 'marketing', color: '#ec4899', motif: 'rings' },
  { slug: 'cyber', color: '#10b981', motif: 'shield' },
  { slug: 'construction', color: '#ef4444', motif: 'structure' },
  { slug: 'innovation', color: '#06b6d4', motif: 'roadmap' },
  { slug: 'home', color: '#3b82f6', motif: 'ecosystem' },
  { slug: 'method', color: '#8b5cf6', motif: 'pipeline' },
  { slug: 'about', color: '#06b6d4', motif: 'constellation' },
  { slug: 'contact', color: '#10b981', motif: 'gateway' },
]

function lines(color) {
  const horizontal = Array.from({ length: 8 }, (_, index) => {
    const y = 120 + index * 135
    return `<line x1="0" y1="${y}" x2="1600" y2="${y}" />`
  }).join('')

  const vertical = Array.from({ length: 8 }, (_, index) => {
    const x = 150 + index * 190
    return `<line x1="${x}" y1="0" x2="${x}" y2="1200" />`
  }).join('')

  return `<g opacity="0.045" stroke="${color}" stroke-width="0.75">${horizontal}${vertical}</g>`
}

function motifSvg(item) {
  const c = item.color
  const commonNodes = `
    <g filter="url(#glow)">
      <circle cx="800" cy="520" r="34" fill="#07111f" stroke="${c}" stroke-width="2"/>
      <circle cx="800" cy="520" r="11" fill="${c}" opacity="0.45"/>
      <circle cx="800" cy="520" r="70" fill="none" stroke="${c}" stroke-width="0.6" opacity="0.28"/>
    </g>`

  if (item.motif === 'shield') {
    return `
      <g opacity="0.2" stroke="${c}" fill="none" stroke-width="2">
        <path d="M800 260 L1050 360 L1000 720 C940 850 860 930 800 970 C740 930 660 850 600 720 L550 360 Z"/>
        <path d="M800 330 L965 395 L930 685 C890 775 840 835 800 865 C760 835 710 775 670 685 L635 395 Z" opacity="0.55"/>
      </g>${commonNodes}`
  }

  if (item.motif === 'structure') {
    return `
      <g opacity="0.22" stroke="${c}" fill="none" stroke-width="2">
        <path d="M360 820 L610 420 L860 820 Z"/>
        <path d="M740 820 L990 380 L1240 820 Z"/>
        <path d="M430 700 H1170 M500 585 H1110 M580 470 H1030" opacity="0.6"/>
        <path d="M360 820 H1240" opacity="0.8"/>
      </g>${commonNodes}`
  }

  if (item.motif === 'rings') {
    return `
      <g opacity="0.22" stroke="${c}" fill="none" stroke-width="2">
        <circle cx="800" cy="540" r="95"/>
        <circle cx="800" cy="540" r="180" opacity="0.7"/>
        <circle cx="800" cy="540" r="280" opacity="0.45"/>
        <circle cx="800" cy="540" r="400" opacity="0.25"/>
      </g>${commonNodes}`
  }

  if (item.motif === 'channels') {
    return `
      <g opacity="0.22" stroke="${c}" fill="none" stroke-width="2">
        <path d="M260 320 C520 420 560 520 800 520 C1040 520 1080 420 1340 320"/>
        <path d="M260 560 C520 620 590 710 800 710 C1010 710 1080 620 1340 560" opacity="0.7"/>
        <path d="M260 800 C520 720 590 610 800 610 C1010 610 1080 720 1340 800" opacity="0.45"/>
      </g>${commonNodes}`
  }

  if (item.motif === 'flow') {
    return `
      <g opacity="0.22" stroke="${c}" fill="none" stroke-width="2">
        <path d="M270 720 C470 440 620 380 800 520 C980 660 1110 650 1340 420"/>
        <path d="M320 860 C520 650 640 620 800 720 C960 820 1120 780 1280 620" opacity="0.55"/>
        <rect x="510" y="380" width="160" height="90" rx="20" opacity="0.5"/>
        <rect x="930" y="610" width="160" height="90" rx="20" opacity="0.5"/>
      </g>${commonNodes}`
  }

  if (item.motif === 'roadmap') {
    return `
      <g opacity="0.22" stroke="${c}" fill="none" stroke-width="2">
        <path d="M300 810 C450 660 550 720 650 570 C760 405 910 660 1030 480 C1140 315 1230 380 1320 280"/>
        <circle cx="300" cy="810" r="24"/>
        <circle cx="650" cy="570" r="24"/>
        <circle cx="1030" cy="480" r="24"/>
        <circle cx="1320" cy="280" r="24"/>
      </g>${commonNodes}`
  }

  if (item.motif === 'ecosystem') {
    return `
      <g opacity="0.2" stroke="${c}" fill="none" stroke-width="2">
        <circle cx="800" cy="540" r="120"/>
        <circle cx="800" cy="540" r="250" opacity="0.65"/>
        <circle cx="800" cy="540" r="390" opacity="0.35"/>
        <path d="M800 540 L480 330 M800 540 L1120 330 M800 540 L430 680 M800 540 L1170 680 M800 540 L640 890 M800 540 L960 890" opacity="0.8"/>
      </g>${commonNodes}`
  }

  if (item.motif === 'pipeline') {
    return `
      <g opacity="0.22" stroke="${c}" fill="none" stroke-width="2">
        <path d="M260 720 C410 540 520 620 640 500 C780 360 880 710 1020 560 C1140 430 1260 470 1360 340"/>
        <circle cx="260" cy="720" r="22"/><circle cx="500" cy="595" r="22"/><circle cx="720" cy="485" r="22"/>
        <circle cx="920" cy="650" r="22"/><circle cx="1130" cy="460" r="22"/><circle cx="1360" cy="340" r="22"/>
      </g>${commonNodes}`
  }

  if (item.motif === 'constellation') {
    return `
      <g opacity="0.2" stroke="${c}" fill="none" stroke-width="2">
        <path d="M360 310 L610 430 L820 300 L1060 450 L1240 360 M610 430 L520 720 L800 840 L1060 690 L1240 360 M820 300 L800 840"/>
        <circle cx="360" cy="310" r="18"/><circle cx="610" cy="430" r="24"/><circle cx="820" cy="300" r="18"/>
        <circle cx="1060" cy="450" r="24"/><circle cx="1240" cy="360" r="18"/><circle cx="520" cy="720" r="22"/>
        <circle cx="800" cy="840" r="26"/><circle cx="1060" cy="690" r="20"/>
      </g>${commonNodes}`
  }

  if (item.motif === 'gateway') {
    return `
      <g opacity="0.22" stroke="${c}" fill="none" stroke-width="2">
        <path d="M520 850 V420 C520 340 585 280 665 280 H935 C1015 280 1080 340 1080 420 V850"/>
        <path d="M610 850 V455 C610 420 640 390 675 390 H925 C960 390 990 420 990 455 V850" opacity="0.58"/>
        <path d="M300 850 H1300 M390 760 H1210 M470 670 H1130" opacity="0.5"/>
      </g>${commonNodes}`
  }

  return `
    <g opacity="0.2" stroke="${c}" fill="none" stroke-width="2">
      <line x1="800" y1="520" x2="420" y2="300"/>
      <line x1="800" y1="520" x2="360" y2="610"/>
      <line x1="800" y1="520" x2="530" y2="830"/>
      <line x1="800" y1="520" x2="1080" y2="335"/>
      <line x1="800" y1="520" x2="1240" y2="610"/>
      <line x1="800" y1="520" x2="1060" y2="840"/>
    </g>
    <g filter="url(#glow)">
      <circle cx="420" cy="300" r="18" fill="#07111f" stroke="${c}" stroke-width="1.5"/>
      <circle cx="360" cy="610" r="15" fill="#07111f" stroke="${c}" stroke-width="1.5"/>
      <circle cx="530" cy="830" r="16" fill="#07111f" stroke="${c}" stroke-width="1.5"/>
      <circle cx="1080" cy="335" r="16" fill="#07111f" stroke="${c}" stroke-width="1.5"/>
      <circle cx="1240" cy="610" r="15" fill="#07111f" stroke="${c}" stroke-width="1.5"/>
      <circle cx="1060" cy="840" r="14" fill="#07111f" stroke="${c}" stroke-width="1.5"/>
    </g>${commonNodes}`
}

function svg(item) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1200" width="1600" height="1200">
  <defs>
    <radialGradient id="bg" cx="50%" cy="35%" r="75%">
      <stop offset="0%" stop-color="#101927"/>
      <stop offset="58%" stop-color="#06101d"/>
      <stop offset="100%" stop-color="#020509"/>
    </radialGradient>
    <radialGradient id="accent" cx="50%" cy="42%" r="38%">
      <stop offset="0%" stop-color="${item.color}" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="${item.color}" stop-opacity="0"/>
    </radialGradient>
    <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <rect width="1600" height="1200" fill="url(#bg)"/>
  <rect width="1600" height="1200" fill="url(#accent)"/>
  ${lines(item.color)}
  ${motifSvg(item)}
</svg>`
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true })

  for (const item of competencies) {
    const svgContent = svg(item)
    const svgPath = path.join(outDir, `${item.slug}-card.svg`)
    const webpPath = path.join(outDir, `${item.slug}-card.webp`)

    fs.writeFileSync(svgPath, svgContent)
    await sharp(Buffer.from(svgContent)).webp({ quality: 90 }).toFile(webpPath)
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
