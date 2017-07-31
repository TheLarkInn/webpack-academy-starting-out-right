const loaderUtils = require("loader-utils");

module.exports = function loader(source) {
    console.log(source);

    return source;
}
