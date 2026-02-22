const markdownIt = require("markdown-it");
const markdownItKatex = require("@iktakahiro/markdown-it-katex");

module.exports = function (eleventyConfig) {
  const md = markdownIt({ html: true }).use(markdownItKatex);
  eleventyConfig.setLibrary("md", md);
  eleventyConfig.addFilter("dateDisplay", (date) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  eleventyConfig.addFilter("isoDate", (date) => {
    return new Date(date).toISOString().split("T")[0];
  });

  eleventyConfig.addFilter("truncate", (str, len) => {
    if (!str) return "";
    if (str.length <= len) return str;
    return str.slice(0, len) + "...";
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
