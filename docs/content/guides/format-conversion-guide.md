---
layout: base.njk
title: Document Format Conversion Guide
---

# Document Format Conversion Guide

This guide demonstrates how to convert various document formats into Markdown for use in our documentation system.

## Supported Formats

We support converting the following formats to Markdown:

1. [LaTeX Documents](./latex-example/)
2. [reStructuredText (RST)](./rst-example/)
3. [Plain Text Files](./plaintext-example/)
4. [Microsoft Word Documents](./word-example/)

## How to Convert Documents

To convert your documents, use the following command:

```bash
npm run convert your-file.extension
```

Replace `your-file.extension` with the path to your document. Supported extensions are:
- `.tex` for LaTeX
- `.rst` for reStructuredText
- `.txt` for plain text
- `.docx` for Microsoft Word

## Best Practices

### For All Formats
- Keep formatting consistent
- Use proper headings and structure
- Include code blocks with language specifiers
- Use tables and lists appropriately

### Format-Specific Tips

#### LaTeX
- Mathematical equations will be converted to MathJax syntax
- Use standard LaTeX document classes
- Tables and figures will be converted appropriately

#### reStructuredText
- Use standard RST directives
- Code blocks with language hints are preserved
- Admonitions (notes, warnings) are converted to blockquotes

#### Plain Text
- Use consistent indentation for code blocks
- ASCII art tables will be converted to Markdown tables
- URLs are automatically linked

#### Microsoft Word
- Use Word's built-in styles for headings
- Use proper list formatting
- Use Word's table features
- Keep images in common formats (PNG, JPG, GIF)

## Examples

Check out our example documents to see how different formats are converted:

1. [LaTeX Example](./latex-example/) - Mathematical and scientific documentation
2. [RST Example](./rst-example/) - Technical documentation with advanced formatting
3. [Plain Text Example](./plaintext-example/) - Simple structured content
4. [Word Example](./word-example/) - Rich text document conversion