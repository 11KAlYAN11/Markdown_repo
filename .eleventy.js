const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItPrism = require('markdown-it-prism');

module.exports = function(eleventyConfig) {
  // Configure Markdown processing
  const mdOptions = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  };
  
  const markdownLib = markdownIt(mdOptions)
    .use(markdownItAnchor, {
      permalink: true,
      permalinkClass: 'anchor',
      permalinkSymbol: '#'
    })
    .use(markdownItPrism, {
      defaultLanguage: 'plaintext',
      plugins: [
        'line-numbers',
        'show-language',
        'copy-to-clipboard'
      ]
    });

  eleventyConfig.setLibrary("md", markdownLib);

  // Copy assets directory to output
  eleventyConfig.addPassthroughCopy("docs/assets");

  // Watch for changes in assets
  eleventyConfig.addWatchTarget("docs/assets/");

  return {
    dir: {
      input: "docs",
      output: "_site",
      includes: "_layouts"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};