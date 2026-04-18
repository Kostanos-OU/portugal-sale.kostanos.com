import sharp from 'sharp';
import { readdir, unlink } from 'fs/promises';
import { join } from 'path';

const dir = join(import.meta.dirname, '..', 'public', 'images');

const files = (await readdir(dir)).filter(f => f.endsWith('.jpg'));
console.log(`Converting ${files.length} images...`);

for (const file of files) {
  const input = join(dir, file);
  const output = join(dir, file.replace('.jpg', '.webp'));
  await sharp(input).webp({ quality: 80 }).toFile(output);
  await unlink(input);
  console.log(`  ${file} → ${file.replace('.jpg', '.webp')}`);
}

console.log('Done!');
