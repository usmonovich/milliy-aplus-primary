// Generates the app icons as PNG without dependencies (zlib only).
// Design: deep-blue tile, emerald ring, white "+" and a gold accent dot.
import { deflateSync } from 'node:zlib';
import { mkdirSync, writeFileSync } from 'node:fs';

const crcTable = Array.from({ length: 256 }, (_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c >>> 0; });
const crc = (buf) => { let c = 0xffffffff; for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
const chunk = (type, data) => {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type), data]);
  const c = Buffer.alloc(4); c.writeUInt32BE(crc(td));
  return Buffer.concat([len, td, c]);
};

function png(size, { maskable = false } = {}) {
  const SS = 4;
  const row = size * 4 + 1;
  const raw = Buffer.alloc(row * size);
  const blue = [30, 58, 138], emerald = [16, 185, 129], gold = [234, 179, 8], white = [255, 255, 255];
  const s = maskable ? 0.72 : 0.86;
  for (let y = 0; y < size; y++) {
    raw[y * row] = 0;
    for (let x = 0; x < size; x++) {
      const acc = [0, 0, 0, 0];
      for (let sy = 0; sy < SS; sy++) for (let sx = 0; sx < SS; sx++) {
        const u = (x + (sx + 0.5) / SS) / size, v = (y + (sy + 0.5) / SS) / size;
        const r = 0.22, dx = Math.max(Math.abs(u - 0.5) - (0.5 - r), 0), dy = Math.max(Math.abs(v - 0.5) - (0.5 - r), 0);
        if (!(maskable || dx * dx + dy * dy <= r * r)) continue;
        let col = blue;
        const cu = (u - 0.5) / s, cv = (v - 0.5) / s, d = Math.hypot(cu, cv);
        if (d < 0.36 && d > 0.26) col = emerald;
        if ((Math.abs(cu) < 0.045 && Math.abs(cv) < 0.17) || (Math.abs(cv) < 0.045 && Math.abs(cu) < 0.17)) col = white;
        if (Math.hypot(cu - 0.3, cv + 0.3) < 0.075) col = gold;
        acc[0] += col[0]; acc[1] += col[1]; acc[2] += col[2]; acc[3] += 1;
      }
      const o = y * row + 1 + x * 4;
      if (acc[3]) { raw[o] = acc[0] / acc[3]; raw[o + 1] = acc[1] / acc[3]; raw[o + 2] = acc[2] / acc[3]; }
      raw[o + 3] = Math.round((acc[3] / (SS * SS)) * 255);
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4); ihdr[8] = 8; ihdr[9] = 6;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))]);
}

mkdirSync('public/icons', { recursive: true });
writeFileSync('public/icons/icon-192.png', png(192));
writeFileSync('public/icons/icon-512.png', png(512));
writeFileSync('public/icons/maskable-512.png', png(512, { maskable: true }));
writeFileSync('public/icons/apple-touch-icon.png', png(180, { maskable: true }));
console.log('icons written');
