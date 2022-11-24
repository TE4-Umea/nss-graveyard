const Image = require('@11ty/eleventy-img');

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 600, null],
    urlPath: '/assets/images/',
    outputDir: './public/assets/images/',
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: 'lazy',
    decoding: 'async',
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt='' works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget('./src/sass/');
    eleventyConfig.addWatchTarget('./src/assets/**/*');
    
    // eleventyConfig.addPassthroughCopy('./src/images/');
    eleventyConfig.addPassthroughCopy({'./src/assets/fonts/': './assets/fonts/'});
    
    eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode);
    eleventyConfig.addLiquidShortcode('image', imageShortcode);
    eleventyConfig.addJavaScriptFunction('image', imageShortcode);

    return {
        dir: {
        input: 'src',
        output: 'public',
        },
    };
};
