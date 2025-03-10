export default function (eleventyConfig) {
  // Add a passthrough copy for static files (like images)
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/styles");
  // Return the configuration object
  return {
    dir: {
      input: "src",  // Tell Eleventy to use the "src" folder as the input
      output: "_site",  // The output folder where Eleventy will generate static files
    }
  };
};