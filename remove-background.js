const fs = require('fs').promises;
const path = require('path');
const { removeBackground } = require('@imgly/background-removal-node');

async function removeImageBackground(inputPath, outputPath) {
    try {
        // Read the input image file
        const inputImage = await fs.readFile(inputPath);

        const arrayBuffer = inputImage.buffer.slice(inputImage.byteOffset, inputImage.byteOffset + inputImage.byteLength);
        const blob = new Blob([arrayBuffer], { type: 'image/png' });

        // Remove the background
        const config = {
            debug: false,
            model: 'medium',
            output: { format: 'image/png', quality: 0.5 },
        };

        const outputImage = await removeBackground(blob, config);

        // Convert the output Blob to a Buffer
        const outputBuffer = Buffer.from(await outputImage.arrayBuffer());

        // Write the output image file
        await fs.writeFile(outputPath, outputBuffer);

        console.log(`Background removed successfully. Output saved to: ${outputPath}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Check if input and output paths are provided
if (process.argv.length < 4) {
    console.log('Usage: node remove-background.js <input_image_path> <output_image_path>');
    process.exit(1);
}

const inputPath = path.resolve(process.argv[2]);
const outputPath = path.resolve(process.argv[3]);

removeImageBackground(inputPath, outputPath);
