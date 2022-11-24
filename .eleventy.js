module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addWatchTarget("./src/js/");

    eleventyConfig.addPassthroughCopy("./src/images/");
        eleventyConfig.addPassthroughCopy("./src/js/");

    return {
        dir: {
        input: "src",
        output: "public",
        },
    };
};
