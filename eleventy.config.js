
function sortByNameReverse(values) {
  return values.slice().sort((a, b) => a.data.name.localeCompare(b.data.name)).reverse()
}

export default function (eleventyConfig) {
  // Add a passthrough copy for static files (like images)
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/styles");
  // Add a sorting filter.
  eleventyConfig.addFilter("sortByNameReverse", sortByNameReverse);
  // Return the configuration object
  return {
    dir: {
      input: "src",  // Tell Eleventy to use the "src" folder as the input
      output: "_site",  // The output folder where Eleventy will generate static files
    }
  };
};