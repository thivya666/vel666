import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, 'public');

function convertImages(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      convertImages(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        let baseName = path.basename(fullPath, ext);
        // Handle double extensions like .png.png or .jpg.jpg
        while (baseName.endsWith('.png') || baseName.endsWith('.jpg') || baseName.endsWith('.jpeg')) {
          baseName = path.parse(baseName).name;
        }
        
        const webpPath = path.join(dir, `${baseName}.webp`);
        console.log(`Converting ${fullPath} to ${webpPath}`);
        
        sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(webpPath)
          .then(() => {
            console.log(`Successfully converted ${file}`);
            // Optionally delete original file
            fs.unlinkSync(fullPath);
            console.log(`Deleted ${file}`);
          })
          .catch(err => {
            console.error(`Error converting ${file}:`, err);
          });
      }
    }
  });
}

convertImages(directoryPath);
