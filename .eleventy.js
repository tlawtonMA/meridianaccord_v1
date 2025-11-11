module.exports = function(eleventyConfig) {
  // Copy static folders straight through
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy({"assets": "assets"});
  eleventyConfig.addPassthroughCopy({"data": "data"});

  // Simple date filter you can use in templates: {{ someDate | readableDate }}
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    try {
      return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      }).format(dateObj);
    } catch {
      return "";
    }
  });

  return {
    dir: {
      input: ".",           // Changed from "src" to "." (root)
      includes: "_includes",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"]
  };
};
