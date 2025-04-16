---
layout: base.njk
title: Getting Started with Documentation
---

# Getting Started with Documentation

This guide will help you understand how to write and organize documentation in this system.

## Writing Documentation

### Markdown Basics

Your documentation should be written in Markdown format. Here are some common syntax examples:

```markdown
# Heading 1
## Heading 2
### Heading 3

- Bullet points
- Another point
  - Nested point

1. Numbered list
2. Second item

**Bold text**
*Italic text*

[Link text](url)
```

### Code Blocks

You can include code blocks with syntax highlighting:

```javascript
function example() {
    console.log("Hello, documentation!");
}
```

```python
def example():
    print("Hello, documentation!")
```

### File Organization

Place your documentation files in appropriate directories under `docs/content/`:

```
docs/
├── content/
│   ├── guides/      # Tutorial and how-to content
│   ├── reference/   # API and technical reference
│   └── examples/    # Code examples and demos
└── assets/
    └── images/      # Images and other media
```

## Using Pandoc

To convert other file formats to Markdown, use the convert script:

```bash
npm run convert your-file.docx
```

This will automatically convert your file to Markdown and place it in the correct directory.

## Building and Previewing

To preview your documentation locally:

1. Run `npm run serve`
2. Open `http://localhost:8080` in your browser

The site will automatically update as you make changes to your content.