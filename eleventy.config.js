import { eleventyImageTransformPlugin } from '@11ty/eleventy-img'

export default function (eleventyConfig) {
  // Add a passthrough copy for static files
  eleventyConfig.addPassthroughCopy('src/images')
  eleventyConfig.addPassthroughCopy('src/styles')
  // Add image plugin
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ['webp', 'jpeg', 'svg'],
    svgShortCircuit: true
  })
  // Return the configuration object
  return {
    dir: {
      input: 'src', // Tell Eleventy to use the "src" folder as the input
      output: '_site' // The output folder where Eleventy will generate static files
    }
  }
};
