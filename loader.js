const loaderUtils = require("loader-utils");
const checkSpellingAsync = require("./checkSpellingAsync");

module.exports = function loader(source) {
  const callback = this.async();
  const { emitWarning } = this; // this.emitWarning()
  const options = loaderUtils.getOptions(this); //'this' is the Loader Context itself.

  checkSpellingAsync(source, (misspelledWords) => {
    const words = Array.from(misspelledWords.keys()).join(" | ");

    if (options.warnings) {
      emitWarning(words);
    }

    callback(null, source);
  })
}
