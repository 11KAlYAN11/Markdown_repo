---
layout: base.njk
title: File Conversion Learning Guide
---

# Learning Document Conversion for Documentation

This guide walks through the journey of building a documentation system that can handle multiple file formats. We'll explore each step taken and the lessons learned along the way.

## Project Evolution

### 1. Initial Setup Phase

We started by setting up a basic project structure:

1. Initialize Node.js project:
   ```bash
   npm init -y
   ```

2. Install core dependencies:
   ```bash
   npm install @11ty/eleventy markdown-it markdown-it-anchor
   ```

3. Create basic directory structure:
   ```
   docs/
   ├── _layouts/    # Templates
   ├── assets/      # Static files
   └── content/     # Documentation
   ```

### 2. Document Conversion Setup

We added Pandoc support to handle multiple file formats:

1. Install Pandoc:
   ```bash
   sudo apt-get install pandoc texlive
   ```

2. Create conversion script (scripts/pandoc-convert.js):
   ```javascript
   const { spawn } = require('child_process');
   // Script details in the repository
   ```

3. Test different formats:
   - LaTeX (.tex)
   - Word (.docx)
   - reStructuredText (.rst)
   - Plain text (.txt)

### 3. Styling Enhancement

We implemented professional styling with:
1. Modern CSS layout
2. Responsive design
3. Syntax highlighting via Prism.js
4. Mobile-friendly navigation

## Working with Different Formats

### LaTeX Documents

1. **Structure**: LaTeX documents use a specific structure:
   ```latex
   \documentclass{article}
   \begin{document}
   Your content here
   \end{document}
   ```

2. **Conversion Process**:
   ```bash
   pandoc input.tex -f latex -t markdown -o output.md
   ```

3. **Key Points**:
   - Mathematical equations are preserved
   - Tables convert cleanly
   - Bibliography support

### Word Documents

1. **Best Practices**:
   - Use proper heading styles
   - Maintain consistent formatting
   - Use built-in features for lists/tables

2. **Conversion Command**:
   ```bash
   pandoc input.docx -f docx -t markdown -o output.md
   ```

3. **Features Preserved**:
   - Document structure
   - Text formatting
   - Tables and lists
   - Images (with proper handling)

### reStructuredText (RST)

1. **Common Elements**:
   ```rst
   Title
   =====
   
   Section
   -------
   
   * Bullet point
   * Another point
   ```

2. **Conversion Process**:
   ```bash
   pandoc input.rst -f rst -t markdown -o output.md
   ```

3. **Special Features**:
   - Directives convert to HTML/Markdown
   - Code blocks maintain syntax
   - Admonitions become blockquotes

### Plain Text

1. **Formatting Guidelines**:
   - Use consistent indentation
   - Clear section headers
   - ASCII-style tables if needed

2. **Conversion Approach**:
   ```bash
   pandoc input.txt -f text -t markdown -o output.md
   ```

## Code Highlighting Implementation

We added syntax highlighting using Prism.js:

1. **Include Required Files**:
   ```html
   <link rel="stylesheet" href="prism.css">
   <script src="prism.js"></script>
   ```

2. **Language Support**:
   - Python
   - JavaScript
   - Java
   - C/C++
   - Shell scripts
   - And more...

3. **Features Added**:
   - Line numbers
   - Copy button
   - Language indicators

## Tips for Learners

1. **Start Small**:
   - Begin with basic Markdown
   - Add one format at a time
   - Test thoroughly before moving on

2. **Common Issues**:
   - Check Pandoc installation
   - Verify file permissions
   - Watch for encoding issues

3. **Best Practices**:
   - Keep source files organized
   - Use consistent naming
   - Document conversion steps

## Advanced Features

1. **Custom Styling**:
   - Theme customization
   - Mobile responsiveness
   - Print-friendly styles

2. **Navigation**:
   - Automatic sidebar
   - Active page highlighting
   - Breadcrumb support

3. **Build Process**:
   - Automated conversions
   - Asset optimization
   - Error checking

## Troubleshooting Guide

### Common Conversion Issues

1. **LaTeX Errors**:
   - Missing packages
   - Complex equations
   - Custom commands

2. **Word Document Problems**:
   - Complex formatting
   - Embedded objects
   - Custom styles

3. **RST Challenges**:
   - Directive conversion
   - Complex tables
   - Image handling

### Solutions

1. **Format-Specific Fixes**:
   - Pre-process complex LaTeX
   - Simplify Word styles
   - Clean up RST directives

2. **General Tips**:
   - Check Pandoc version
   - Verify input format
   - Review error messages

## Next Steps

1. **Expand Knowledge**:
   - Learn more about Eleventy
   - Explore advanced Pandoc features
   - Study CSS frameworks

2. **Enhance Project**:
   - Add more formats
   - Improve styling
   - Create custom plugins

3. **Share and Collaborate**:
   - Document your journey
   - Share improvements
   - Help other learners

## Resources and References

- [Pandoc Documentation](https://pandoc.org/MANUAL.html)
- [Eleventy Guide](https://www.11ty.dev/docs/)
- [Markdown Reference](https://www.markdownguide.org/)
- [Prism.js Documentation](https://prismjs.com/)