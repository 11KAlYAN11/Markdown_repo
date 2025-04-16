# Documentation Project

A modern documentation site generator built with Eleventy that supports Markdown files and Pandoc conversions.

## Repository Details

- **Description**: A flexible documentation generator that converts multiple document formats to a modern, searchable static site
- **Website**: https://markdown-docs-generator.netlify.app
- **Topics**: documentation markdown eleventy pandoc static-site documentation-generator

## Publishing Information

### Releases
- Latest stable version: v1.0.0
- Release schedule: Monthly
- [View all releases](./releases)

### Deployment
This project is configured for automatic deployment:
- Main documentation: Netlify
- Package registry: npm

### Packages
- Available on npm: `@markdown-repo/docs-generator`
- Install: `npm install @markdown-repo/docs-generator`

## Features

- Write content in Markdown
- Convert other formats to Markdown using Pandoc
- Clean, responsive design
- Mobile-friendly navigation
- Code syntax highlighting
- Automatic table of contents
- Live preview while editing

## Prerequisites

- Node.js (v14 or higher)
- Pandoc (optional, for document conversion)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. If you plan to use Pandoc for file conversions, install it following the instructions for your OS:
   - Ubuntu/Debian: `sudo apt-get install pandoc`
   - macOS: `brew install pandoc`
   - Windows: Download from [pandoc.org](https://pandoc.org)

## Usage

### Development

Start the development server:
```bash
npm run serve
```

This will start a local server at `http://localhost:8080` with live reload.

### Building

Build the static site:
```bash
npm run build
```

The built site will be in the `_site` directory.

### Converting Documents

To convert documents from other formats to Markdown:
```bash
npm run convert path/to/your/document.docx
```

Supported formats:
- Microsoft Word (.docx)
- Text files (.txt)
- reStructuredText (.rst)
- LaTeX (.tex)

## Project Structure

```
.
├── docs/
│   ├── _layouts/    # Template files
│   ├── assets/      # Static assets
│   ├── content/     # Documentation content
│   └── index.md     # Home page
├── scripts/         # Utility scripts
└── _site/          # Built site (generated)
```

## Contributing

1. Place your Markdown files in the appropriate directory under `docs/content/`
2. Files should include front matter with layout and title:
   ```yaml
   ---
   layout: base.njk
   title: Your Page Title
   ---
   ```
3. Run the development server to preview changes
4. Build the site before committing

## License

This project is licensed under the ISC License.