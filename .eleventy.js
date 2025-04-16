const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = function(eleventyConfig) {
  // Configure Markdown processing
  const mdOptions = {
    html: true,
    breaks: true,
    linkify: true
  };
  
  const markdownLib = markdownIt(mdOptions).use(markdownItAnchor);
  eleventyConfig.setLibrary("md", markdownLib);

  // Copy assets directory to output
  eleventyConfig.addPassthroughCopy("docs/assets");

  return {
    dir: {
      input: "docs",
      output: "_site",
      includes: "_layouts"
    },
    templateFormats: ["md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};