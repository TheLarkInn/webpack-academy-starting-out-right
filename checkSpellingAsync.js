const { spellCallback, spellcheck } = require("markdown-spellcheck").default;
const chalk = require("chalk");

/**
 * @description - This function will call the "markdown-spellcheck" api 
 * and then return a callback when finished. 
 * 
 * @param {string} source 
 * @param {Function} checkDidFinish 
 */
function checkSpellingAsync(source, checkDidFinish) {
    const misspelledWords = new Map();

    /**
     * @description - This callback function fires whenever the spellchecker api comes 
     * across a spelling mistake. Then it will store the value in a misspelledWords `Map()`, 
     * and call the `logSpellingResults()` to display the information about the error.
     * 
     * @param {{word: string, index: number}} wordInfo
     * @param {Function} onWordProcessed 
     */
    function onSpellCallback(wordInfo, onWordProcessed) {
        const {word, index} = wordInfo;
        // logSpellingResults(source, word, index);
        misspelledWords.set(word, {index});
        onWordProcessed();
    };

    spellCallback(source, {}, onSpellCallback, () => { checkDidFinish(misspelledWords) });
}

module.exports = checkSpellingAsync;