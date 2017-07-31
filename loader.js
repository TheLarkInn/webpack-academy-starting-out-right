const { spellCallback, spellcheck } = require("markdown-spellcheck").default;
const chalk = require("chalk");

module.exports = function loader(source) {

    return source;
}
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
        logSpellingResults(source, word, index);
        misspelledWords.set(word, {index});
        onWordProcessed();
    };

    spellCallback(source, {}, onSpellCallback, checkDidFinish);
}

/**
 * @description - This function will `console.log` an instance of a misspelling 
 * and show some context around where the misspelling took place
 * 
 * @param {string} source - full markdown source string
 * @param {string} word - string value of the misspelled word
 * @param {number} index - index of the misspelled word inside the source string
 */
function logSpellingResults(source, word, index) {
    console.log(`
Spelling mistake found: ${chalk.bold(`${word}`)}
        
${chalk.yellow(source.substring(index-20, index+20).replace(word, chalk.red(word)))}...
    `);    
}


// Informative
// markdown-spellcheck-loader
// Take source
// verify if there are spelling errors
// if there are => emit a warning or error
// support having an option to switch to warning or error
