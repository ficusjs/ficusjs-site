const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const CleanCSS = require("clean-css")
const htmlmin = require("html-minifier")

module.exports = function (eleventyConfig) {
  if (process.env.NODE_ENV === 'production') {
    eleventyConfig.addPassthroughCopy("./src/img")
  } else {
    eleventyConfig.addWatchTarget("./src/js/")
    eleventyConfig.addWatchTarget("./src/css/")
    eleventyConfig.addPassthroughCopy("./src/js")
    eleventyConfig.addPassthroughCopy("./src/img")
  }

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

  eleventyConfig.addShortcode("serviceWorker", function () {
    if (process.env.NODE_ENV === 'production') {
      return `<script>window.onload=function(){"serviceWorker"in navigator&&navigator.serviceWorker.register('/sw.js')};</script>`
    }
    return ''
  })

  eleventyConfig.addPlugin(syntaxHighlight)
}
