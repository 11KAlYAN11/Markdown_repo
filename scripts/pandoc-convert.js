const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Supported input formats
const supportedFormats = ['.docx', '.txt', '.rst', '.tex'];

// Convert a file using pandoc
function convertFile(inputPath) {
    const ext = path.extname(inputPath);
    if (!supportedFormats.includes(ext)) {
        console.error(`Unsupported file format: ${ext}`);
        return;
    }

    const outputPath = path.join(
        'docs/content',
        path.basename(inputPath, ext) + '.md'
    );

    const pandoc = spawn('pandoc', [
        inputPath,
        '-f', ext.slice(1),
        '-t', 'markdown',
        '-o', outputPath,
        '--wrap=none'
    ]);

    pandoc.stderr.on('data', (data) => {
        console.error(`Error: ${data}`);
    });

    pandoc.on('close', (code) => {
        if (code === 0) {
            console.log(`Successfully converted ${inputPath} to ${outputPath}`);
        } else {
            console.error(`Conversion failed with code ${code}`);
        }
    });
}

// Process command line arguments
const files = process.argv.slice(2);
if (files.length === 0) {
    console.log('Usage: node pandoc-convert.js <file1> [file2 ...]');
    process.exit(1);
}

files.forEach(file => convertFile(file));