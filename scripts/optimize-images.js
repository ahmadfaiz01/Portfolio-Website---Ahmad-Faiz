import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
const DIST_DIR = path.join(publicDir, 'optimized');

if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR);
}

const supportedExtensions = ['.png', '.jpg', '.jpeg'];

async function optimizeImages() {
    const files = fs.readdirSync(publicDir);

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (supportedExtensions.includes(ext)) {
            const inputPath = path.join(publicDir, file);
            const filename = path.parse(file).name;
            const outputPath = path.join(publicDir, `${filename}.webp`);

            try {
                console.log(`Optimizing ${file}...`);
                await sharp(inputPath)
                    .resize({ width: 1920, withoutEnlargement: true }) // Resize if larger than 1920px width
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                console.log(`Saved to ${outputPath}`);
            } catch (error) {
                console.error(`Error optimizing ${file}:`, error);
            }
        }
    }
}

optimizeImages();
