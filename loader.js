const checkSpellingAsync = require("./checkSpellingAsync");

module.exports = function loader(source) {
    const callback = this.async();
    const {emitWarning} = this; // this.emitWarning()

    checkSpellingAsync(source, (misspelledWords) => {
        const words = Array.from(misspelledWords.keys()).join(" | ");

        emitWarning(words); 
        callback(null, source);
    })
}