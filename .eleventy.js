module.exports = function(eleventyConfig) {
  // 将静态文件复制到输出目录
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");

  // 配置自定义集合，用于获取所有蛋糕
  eleventyConfig.addCollection("cakes", function(collection) {
    return collection.getFilteredByGlob("cakes/*.md");
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk"
  };
};