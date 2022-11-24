module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget('./src/sass/');
    eleventyConfig.addWatchTarget('./src/assets/**/*');

    // eleventyConfig.addPassthroughCopy('./src/images/');
    eleventyConfig.addPassthroughCopy({'./src/assets/js/': './js/'});

    return {
        dir: {
        input: 'src',
        output: 'public',
        },
    };
};
