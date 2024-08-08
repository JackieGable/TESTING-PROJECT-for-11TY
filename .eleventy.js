module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/css");

  // Add 'safe' filter for Liquid templates
  eleventyConfig.addLiquidFilter("safe", function(value) {
    return value;
  });

  eleventyConfig.addCollection("how-to", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/how-to/*.md");
  });


  return {
    dir: {
      input: "src",
      output: "public",
      includes: '_includes',
      layouts: "_layouts",
      data: '_data',
      content: 'pages'
    },
    passthroughFileCopy: true,
    templateFormats: ['html', 'njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    pathPrefix: "",
    serverOptions: {
      port: 8080, // Change the port as needed
      liveReload: true,
      watch: ["public/assets/css/**/*.css", "public/assets/js/**/*.js"]
    }
  };
};
