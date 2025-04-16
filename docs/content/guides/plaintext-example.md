---
layout: base.njk
title: Plain Text Document Example
---

# Sample Plain Text Document

This example demonstrates how plain text files can be converted to Markdown while preserving structure.

## Introduction

Plain text files can contain structured content using simple formatting conventions.

## Lists

1. First item
2. Second item
3. Third item

* Bullet point 1
* Bullet point 2
  * Nested point
  * Another nested point

## Code Example

Here's how we might format code in plain text:

```javascript
function example() {
    console.log("Hello from plain text!");
}
```

## Tables (Converted from ASCII)

| Column 1 | Column 2 |
|----------|----------|
| Value 1  | Value 2  |
| Value 3  | Value 4  |

## Links

Visit: [https://example.com](https://example.com)

Text can be _emphasized_ or made **bold** using standard Markdown syntax.

## Converting Plain Text to Markdown

When converting plain text to Markdown:
1. Headers are detected by underlines
2. Indented blocks become code blocks
3. ASCII tables are converted to Markdown tables
4. URLs are automatically linked
5. Basic formatting like *asterisks* for emphasis is preserved