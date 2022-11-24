const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async function () {
    let url = 'https://fluorescent-boom-umbra.glitch.me/scores';

    /* This returns a promise */
    return EleventyFetch(url, {
        duration: '1m', // save for 1 day
        type: 'json', // we’ll parse JSON for you
    });
};
