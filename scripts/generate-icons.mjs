/**
 * Favicon ve Apple touch icon üretir.
 *
 * Geometri lib/brand-mark.json dosyasından okunur; header'daki logo ile
 * favicon arasında fark oluşmasını engeller.
 *
 * Çalıştırma:  npm run icons
 * Çıktılar:    app/icon.svg, app/apple-icon.png, app/favicon.ico
 */

import fs from "node:fs";
import path from "node:path";

import sharp from "sharp";

const root = process.cwd();
const mark = JSON.parse(
  fs.readFileSync(path.join(root, "lib", "brand-mark.json"), "utf8"),
);

/**
 * Rozet + sembolden oluşan tam SVG.
 * @param size kenar uzunluğu (px)
 * @param padding sembolün rozet içindeki boşluk oranı
 */
function iconSvg(size, padding = 0.14, { hex = true } = {}) {
  // Düzgün altıgen — header'daki clip-path ile aynı oran.
  const cx = size / 2;
  const r = size / 2;
  const hexPath = [
    [cx, 0],
    [cx + r * 0.86, r * 0.5],
    [cx + r * 0.86, r * 1.5],
    [cx, size],
    [cx - r * 0.86, r * 1.5],
    [cx - r * 0.86, r * 0.5],
  ]
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`)
    .join(" ") + " Z";

  const radius = size * 0.22;
  const square = `M ${radius} 0 H ${size - radius} A ${radius} ${radius} 0 0 1 ${size} ${radius} V ${size - radius} A ${radius} ${radius} 0 0 1 ${size - radius} ${size} H 0 V ${radius} A ${radius} ${radius} 0 0 1 ${radius} 0 Z`;

  const inner = size * (1 - padding * 2);
  const scale = inner / 40;
  const offset = size * padding;

  const glyph = mark.paths
    .map((p) => {
      const opacity = p.opacity ?? 1;
      const rule = p.fillRule ?? "nonzero";
      return `<path d="${p.d}" fill="${mark.colors.glyph}" fill-opacity="${opacity}" fill-rule="${rule}" clip-rule="${rule}"/>`;
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="badge" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${mark.colors.gradientFrom}"/>
      <stop offset="1" stop-color="${mark.colors.gradientTo}"/>
    </linearGradient>
  </defs>
  <path d="${hex ? hexPath : square}" fill="url(#badge)"/>
  <g transform="translate(${offset} ${offset}) scale(${scale})">${glyph}</g>
</svg>`;
}

/** PNG gömülü gerçek bir .ico dosyası kurar (ICONDIR + ICONDIRENTRY + PNG). */
function buildIco(pngBuffer, dimension) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // image count

  const entry = Buffer.alloc(16);
  entry.writeUInt8(dimension >= 256 ? 0 : dimension, 0); // width
  entry.writeUInt8(dimension >= 256 ? 0 : dimension, 1); // height
  entry.writeUInt8(0, 2); // palette
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(pngBuffer.length, 8);
  entry.writeUInt32LE(header.length + entry.length, 12); // data offset

  return Buffer.concat([header, entry, pngBuffer]);
}

async function main() {
  const appDir = path.join(root, "app");

  // 1) Ölçeklenebilir favicon
  fs.writeFileSync(path.join(appDir, "icon.svg"), `${iconSvg(64)}\n`);

  // 2) Apple touch icon — köşe yuvarlatmayı iOS kendisi uyguladığı için
  //    rozet tam kare olarak, kenar boşluğu artırılmış hâlde basılır.
  await sharp(Buffer.from(iconSvg(180, 0.18, { hex: false })))
    .png()
    .toFile(path.join(appDir, "apple-icon.png"));

  // Safari kökte /apple-touch-icon.png arar; Next'in /apple-icon.png yolunu
  // her tarayıcı denemez, bu yüzden public altına da kopyalanır.
  const publicDir = path.join(root, "public");
  fs.mkdirSync(publicDir, { recursive: true });
  fs.copyFileSync(
    path.join(appDir, "apple-icon.png"),
    path.join(publicDir, "apple-touch-icon.png"),
  );
  fs.copyFileSync(
    path.join(appDir, "apple-icon.png"),
    path.join(publicDir, "apple-touch-icon-precomposed.png"),
  );

  // 3) Klasik favicon.ico — public altına yazılır. app/favicon.ico Next'in
  //    metadata route üreticisini tetikler ve HMR sırasında webpack chunk
  //    kaybına yol açar (Cannot find module './NNN.js').
  const png32 = await sharp(Buffer.from(iconSvg(32, 0.13)))
    .resize(32, 32)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), buildIco(png32, 32));

  // 4) Basılı/paylaşım kullanımı için sembolün tek başına SVG'si
  const imagesDir = path.join(root, "public", "images");
  fs.mkdirSync(imagesDir, { recursive: true });
  fs.writeFileSync(path.join(imagesDir, "logo-mark.svg"), `${iconSvg(256)}\n`);

  console.log(
    "icon.svg, apple-icon.png, apple-touch-icon.png, favicon.ico ve logo-mark.svg üretildi",
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
