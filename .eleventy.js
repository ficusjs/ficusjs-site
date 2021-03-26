const CleanCSS = require("clean-css")
const htmlmin = require("html-minifier")

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/js/")

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
      return minified
    }
    return content
  })

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles
  })

  eleventyConfig.addShortcode('assetPath', function (path) {
    return process.env.NODE_ENV === 'production' ? path : `http://localhost:8000${path}`
  })
}
