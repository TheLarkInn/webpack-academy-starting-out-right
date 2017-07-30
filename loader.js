const loaderUtils = require("loader-utils");

module.exports = function loader(source) {
    const webpackRemainingChain = loaderUtils.getRemainingRequest(this);

    console.log(`REMAINING CHAIN: ${webpackRemainingChain}`);
    return source;
}
