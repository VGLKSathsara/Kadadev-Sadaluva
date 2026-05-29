const sharp = require('sharp');
const path = require('path');

const source = path.join(__dirname, '..', 'logo.png');
const targets = [
  { file: 'android-chrome-192x192.png', size: 192 },
  { file: 'android-chrome-512x512.png', size: 512 },
];

async function main() {
  for (const target of targets) {
    await sharp(source)
      .resize(target.size, target.size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(path.join(__dirname, '..', target.file));
    console.log(`Generated ${target.file}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
