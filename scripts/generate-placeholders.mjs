/**
 * Yerel placeholder görsellerini üretir.
 *
 * Gerçek fotoğraflar gelene kadar site dış bir servise (picsum.photos gibi)
 * bağlı kalmasın diye görseller derleme öncesinde bir kez üretilip
 * public/images/placeholders altına yazılır ve depoya eklenir.
 *
 * Çalıştırma:  npm run placeholders
 *
 * Tasarım: rastgele stok fotoğraf yerine marka paletinde soyut endüstriyel
 * kompozisyonlar. Konteyner silüeti, galvaniz nervür, teknik ızgara gibi
 * motifler kullanıldığı için içerik tematik durur.
 */

import fs from "node:fs";
import path from "node:path";

import sharp from "sharp";

const OUT_DIR = path.join(process.cwd(), "public", "images", "placeholders");

const LANDSCAPE = { width: 1600, height: 1200 };
const PORTRAIT = { width: 1200, height: 1600 };

/** tailwind.config.ts ile aynı palet. */
const c = {
  brand500: "#1f9e66",
  brand600: "#127f53",
  brand700: "#0f6544",
  brand800: "#0f5038",
  brand900: "#0d4230",
  brand950: "#04251b",
  charcoal600: "#4b5254",
  charcoal700: "#3d4244",
  charcoal800: "#2b2f31",
  charcoal900: "#1c1f20",
  charcoal950: "#111314",
  metal300: "#dcc79b",
  metal400: "#c9a86a",
  metal500: "#b48f47",
};

/** Konteyner silüeti — tüm varyantlarda ortak motif. */
function container(x, y, scale, fill, opacity) {
  const s = (n) => n * scale;
  return `
    <g transform="translate(${x} ${y})" fill="${fill}" fill-opacity="${opacity}">
      <rect x="${s(-140)}" y="${s(-130)}" width="${s(280)}" height="${s(34)}" rx="${s(17)}"/>
      <rect x="${s(-38)}" y="${s(-168)}" width="${s(76)}" height="${s(30)}" rx="${s(15)}"/>
      <path d="M ${s(-118)} ${s(-84)} H ${s(118)} L ${s(92)} ${s(122)} a ${s(16)} ${s(16)} 0 0 1 ${s(-16)} ${s(14)} H ${s(-76)} a ${s(16)} ${s(16)} 0 0 1 ${s(-16)} ${s(-14)} Z"/>
    </g>`;
}

/** Dikey nervür deseni (galvaniz sac dokusu). */
function ribs(w, h, gap, stroke, opacity) {
  let out = "";
  for (let x = gap / 2; x < w; x += gap) {
    out += `<line x1="${x}" y1="0" x2="${x}" y2="${h}" stroke="${stroke}" stroke-opacity="${opacity}" stroke-width="3"/>`;
  }
  return out;
}

/** Teknik çizim ızgarası. */
function grid(w, h, step, stroke, opacity) {
  let out = "";
  for (let x = step; x < w; x += step) {
    out += `<line x1="${x}" y1="0" x2="${x}" y2="${h}" stroke="${stroke}" stroke-opacity="${opacity}" stroke-width="2"/>`;
  }
  for (let y = step; y < h; y += step) {
    out += `<line x1="0" y1="${y}" x2="${w}" y2="${y}" stroke="${stroke}" stroke-opacity="${opacity}" stroke-width="2"/>`;
  }
  return out;
}

/** Eşmerkezli yaylar. */
function arcs(cx, cy, from, to, step, stroke, opacity) {
  let out = "";
  for (let r = from; r <= to; r += step) {
    out += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${stroke}" stroke-opacity="${opacity}" stroke-width="3"/>`;
  }
  return out;
}

/** Çapraz bantlar. */
function diagonals(w, h, gap, fill, opacity) {
  let out = "";
  for (let i = -h; i < w + h; i += gap) {
    out += `<path d="M ${i} ${h} L ${i + h * 0.55} 0 L ${i + h * 0.55 + gap * 0.42} 0 L ${i + gap * 0.42} ${h} Z" fill="${fill}" fill-opacity="${opacity}"/>`;
  }
  return out;
}

/**
 * Varyant üreticileri. Her biri tam bir SVG döndürür.
 * Sıralama önemlidir: lib/utils.ts içindeki hash bu diziye göre eşleşir.
 */
const variants = [
  // 1 — Çapraz metal bantlar, koyu charcoal
  (w, h) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c.charcoal800}"/><stop offset="1" stop-color="${c.charcoal950}"/>
    </linearGradient></defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    ${diagonals(w, h, 190, c.charcoal600, 0.5)}
    ${container(w * 0.78, h * 0.72, Math.min(w, h) / 900, "#ffffff", 0.1)}`,

  // 2 — Ortada konteyner silüeti, marka yeşili
  (w, h) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="0.6" y2="1">
      <stop offset="0" stop-color="${c.brand700}"/><stop offset="1" stop-color="${c.brand950}"/>
    </linearGradient></defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    ${arcs(w * 0.5, h * 0.5, 260, Math.max(w, h), 150, "#ffffff", 0.07)}
    ${container(w * 0.5, h * 0.54, Math.min(w, h) / 780, "#ffffff", 0.15)}`,

  // 3 — Eşmerkezli yaylar, derin yeşil
  (w, h) => `
    <defs><radialGradient id="g" cx="0.3" cy="0.25" r="1">
      <stop offset="0" stop-color="${c.brand600}"/><stop offset="1" stop-color="${c.brand950}"/>
    </radialGradient></defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    ${arcs(w * 0.28, h * 0.22, 120, Math.max(w, h) * 1.2, 110, "#ffffff", 0.09)}
    ${container(w * 0.76, h * 0.74, Math.min(w, h) / 950, "#ffffff", 0.12)}`,

  // 4 — Galvaniz nervür dokusu, metal tonu
  (w, h) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0.4">
      <stop offset="0" stop-color="${c.charcoal700}"/><stop offset="0.5" stop-color="${c.charcoal900}"/><stop offset="1" stop-color="${c.charcoal800}"/>
    </linearGradient></defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    ${ribs(w, h, 62, c.metal300, 0.13)}
    <rect width="${w}" height="${h}" fill="${c.metal500}" fill-opacity="0.05"/>
    ${container(w * 0.24, h * 0.74, Math.min(w, h) / 900, c.metal300, 0.14)}`,

  // 5 — Teknik ızgara + konteyner konturu
  (w, h) => `
    <rect width="${w}" height="${h}" fill="${c.charcoal950}"/>
    ${grid(w, h, 84, "#ffffff", 0.07)}
    ${container(w * 0.5, h * 0.52, Math.min(w, h) / 820, c.brand500, 0.3)}
    <rect width="${w}" height="${h}" fill="url(#v)"/>
    <defs><radialGradient id="v" cx="0.5" cy="0.5" r="0.8">
      <stop offset="0.5" stop-color="#000000" stop-opacity="0"/><stop offset="1" stop-color="#000000" stop-opacity="0.45"/>
    </radialGradient></defs>`,

  // 6 — Büyük daire + çapraz kesim, parlak yeşil
  (w, h) => `
    <rect width="${w}" height="${h}" fill="${c.brand800}"/>
    <circle cx="${w * 0.68}" cy="${h * 0.36}" r="${Math.min(w, h) * 0.42}" fill="${c.brand500}" fill-opacity="0.28"/>
    <path d="M 0 ${h} L ${w * 0.62} 0 L ${w} 0 L ${w} ${h} Z" fill="${c.brand950}" fill-opacity="0.35"/>
    ${container(w * 0.26, h * 0.74, Math.min(w, h) / 950, "#ffffff", 0.16)}`,

  // 7 — Altıgen kafes, charcoal
  (w, h) => {
    let hex = "";
    const r = 74;
    for (let row = 0; row * r * 1.5 < h + r; row++) {
      for (let col = 0; col * r * 1.73 < w + r; col++) {
        const cx = col * r * 1.73 + (row % 2 ? r * 0.87 : 0);
        const cy = row * r * 1.5;
        const pts = Array.from({ length: 6 }, (_, i) => {
          const a = (Math.PI / 3) * i - Math.PI / 6;
          return `${(cx + r * 0.94 * Math.cos(a)).toFixed(1)},${(cy + r * 0.94 * Math.sin(a)).toFixed(1)}`;
        }).join(" ");
        hex += `<polygon points="${pts}" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="2"/>`;
      }
    }
    return `
      <defs><linearGradient id="g" x1="0" y1="0" x2="0.8" y2="1">
        <stop offset="0" stop-color="${c.charcoal900}"/><stop offset="1" stop-color="${c.charcoal950}"/>
      </linearGradient></defs>
      <rect width="${w}" height="${h}" fill="url(#g)"/>${hex}
      ${container(w * 0.76, h * 0.72, Math.min(w, h) / 900, c.brand500, 0.3)}`;
  },

  // 8 — Kademeli trapezler, yeşil → charcoal
  (w, h) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="0.5" y2="1">
      <stop offset="0" stop-color="${c.brand700}"/><stop offset="1" stop-color="${c.charcoal950}"/>
    </linearGradient></defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    ${[0.24, 0.46, 0.68, 0.9]
      .map(
        (t, i) =>
          `<path d="M ${w * (0.1 - i * 0.02)} ${h * t} H ${w * (0.9 + i * 0.02)} L ${w * (0.82 + i * 0.02)} ${h * (t + 0.16)} H ${w * (0.18 - i * 0.02)} Z" fill="#ffffff" fill-opacity="${0.05 + i * 0.015}"/>`,
      )
      .join("")}
    ${container(w * 0.8, h * 0.28, Math.min(w, h) / 980, "#ffffff", 0.13)}`,

  // 9 — Oluklu çapraz şeritler, metal
  (w, h) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c.charcoal600}"/><stop offset="0.6" stop-color="${c.charcoal900}"/><stop offset="1" stop-color="${c.charcoal950}"/>
    </linearGradient></defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    ${diagonals(w, h, 96, c.metal400, 0.09)}
    ${container(w * 0.74, h * 0.72, Math.min(w, h) / 880, c.metal300, 0.16)}`,

  // 10 — Merkezden kaçık konteyner konturu, derin yeşil
  (w, h) => `
    <rect width="${w}" height="${h}" fill="${c.brand900}"/>
    ${ribs(w, h, 110, "#ffffff", 0.06)}
    <circle cx="${w * 0.24}" cy="${h * 0.74}" r="${Math.min(w, h) * 0.3}" fill="${c.brand500}" fill-opacity="0.22"/>
    ${container(w * 0.74, h * 0.7, Math.min(w, h) / 880, "#ffffff", 0.14)}`,

  // 11 — Radyal ışık + ızgara, charcoal
  (w, h) => `
    <rect width="${w}" height="${h}" fill="${c.charcoal950}"/>
    <defs><radialGradient id="g" cx="0.7" cy="0.2" r="0.9">
      <stop offset="0" stop-color="${c.brand600}" stop-opacity="0.5"/><stop offset="1" stop-color="${c.brand950}" stop-opacity="0"/>
    </radialGradient></defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    ${grid(w, h, 120, "#ffffff", 0.06)}
    ${container(w * 0.26, h * 0.72, Math.min(w, h) / 920, "#ffffff", 0.12)}`,

  // 12 — Şevron deseni, orta yeşil
  (w, h) => {
    let chev = "";
    for (let y = -120; y < h + 240; y += 132) {
      chev += `<path d="M 0 ${y} L ${w * 0.5} ${y + 96} L ${w} ${y} L ${w} ${y + 44} L ${w * 0.5} ${y + 140} L 0 ${y + 44} Z" fill="#ffffff" fill-opacity="0.07"/>`;
    }
    return `
      <defs><linearGradient id="g" x1="0" y1="0" x2="0.3" y2="1">
        <stop offset="0" stop-color="${c.brand600}"/><stop offset="1" stop-color="${c.brand900}"/>
      </linearGradient></defs>
      <rect width="${w}" height="${h}" fill="url(#g)"/>${chev}
      ${container(w * 0.78, h * 0.74, Math.min(w, h) / 900, "#ffffff", 0.16)}`;
  },
];

async function render(variantIndex, size, file) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size.width}" height="${size.height}" viewBox="0 0 ${size.width} ${size.height}">${variants[variantIndex](size.width, size.height)}</svg>`;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(OUT_DIR, file));
}

async function main() {
  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const jobs = [];

  variants.forEach((_, i) => {
    const n = String(i + 1).padStart(2, "0");
    jobs.push(render(i, LANDSCAPE, `yatay-${n}.jpg`));
  });

  // Dikey varyantlar sertifika ve portre yerleşimler için (ilk 6 tasarım).
  variants.slice(0, 6).forEach((_, i) => {
    const n = String(i + 1).padStart(2, "0");
    jobs.push(render(i, PORTRAIT, `dikey-${n}.jpg`));
  });

  await Promise.all(jobs);

  const files = fs.readdirSync(OUT_DIR);
  const total = files.reduce(
    (sum, f) => sum + fs.statSync(path.join(OUT_DIR, f)).size,
    0,
  );

  console.log(
    `${files.length} placeholder üretildi — toplam ${(total / 1024).toFixed(0)} kB`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
