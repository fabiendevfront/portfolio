/**
 * Generates the URL for a thumbnail image based on the provided name.
 * @param {string} name - Name of the thumbnail image file.
 * @returns {string} - The complete URL to the thumbnail image.
*/
export const getThumbUrl = (name) => {
    return new URL(`../assets/images/works/thumbnails/${name}`, import.meta.url).href;
};

/**
 * Generates the URL for a screenshot image based on the provided name.
 * @param {string} name - Name of the screenshot image file.
 * @returns {string} - The complete URL to the screenshot image.
*/
export const getScreenUrl = (name) => {
    return new URL(`../assets/images/works/screenshots/${name}`, import.meta.url).href;
};