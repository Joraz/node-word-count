var ObjectUtilities_1 = require("../utilities/ObjectUtilities");
var WordLengthMap_1 = require("./WordLengthMap");
/**
 * Counting class. Accepts a string, and separates words based on whitespace characters
 */
var WordCounter = (function () {
    function WordCounter(contents) {
        if (!ObjectUtilities_1.isDefined(contents)) {
            throw new Error("WordCounter cannot accept a null or undefined 'contents' parameter");
        }
        this.wordLengthMap = new WordLengthMap_1.WordLengthMap();
        this.parseContents(contents);
    }
    /**
     * Returns a string representation of the WordCounter
     * @returns {string}
     */
    WordCounter.prototype.toString = function () {
        var returnValue = "";
        returnValue += "Word count = " + this.length + "\n";
        var average = this.getAverageWordLength().toFixed(3);
        returnValue += "Average word length = " + average + "\n";
        returnValue += this.wordLengthMap.toString();
        returnValue += this.getFrequentlyOccurringString();
        return returnValue;
    };
    /**
     * Private helper method for the toString() method
     * @returns {string}
     */
    WordCounter.prototype.getFrequentlyOccurringString = function () {
        var mostFrequentCount = this.wordLengthMap.getMostFrequentValue();
        var mostFrequentCountKeys = this.wordLengthMap.getKeys(mostFrequentCount);
        var mostFrequentCountKeysLength = mostFrequentCountKeys.length;
        var returnStr = "The most frequently occurring word length is " + mostFrequentCount + ", for word length" + (mostFrequentCountKeysLength > 1 ? "s" : "") + " of ";
        if (mostFrequentCountKeysLength === 1) {
            returnStr += mostFrequentCountKeys[0];
        }
        else if (mostFrequentCountKeysLength === 2) {
            returnStr += mostFrequentCountKeys[0] + " & " + mostFrequentCountKeys[1];
        }
        else {
            var lastIndex = mostFrequentCountKeysLength - 1;
            mostFrequentCountKeys.forEach(function (key, index) {
                if (index === 0) {
                    returnStr += key;
                }
                else if (index != lastIndex) {
                    returnStr += ", " + key;
                }
                else {
                    returnStr += " & " + key;
                }
            });
        }
        return returnStr;
    };
    /**
     * Private method that calculates the average word length found
     * @returns {number}
     */
    WordCounter.prototype.getAverageWordLength = function () {
        var wordCountTotal = this.wordLengthMap.getValuesMultipliedByKey().reduce(function (a, b) {
            return a + b;
        }, 0);
        return wordCountTotal / this.length;
    };
    /**
     * Parses the supplied file contents as a string and adds values to the map
     * @param contents
     */
    WordCounter.prototype.parseContents = function (contents) {
        var _this = this;
        contents = contents.replace(/(\r\n|\n|\r)/gm, " ");
        var wordArray = contents.split(" ");
        wordArray = wordArray.filter(function (word) {
            return word.length > 0;
        });
        this.length = wordArray.length;
        // If there are no words, there is nothing to process, so return from the method.
        if (this.length === 0) {
            return;
        }
        // Could be re-written into a native 'for' loop if performance with large files is a concern
        wordArray.forEach(function (word) {
            var filteredWord = word.replace(/[.,!?'"]+/g, "");
            var wordLength = filteredWord.length.toString();
            _this.wordLengthMap.keyExists(wordLength) ? _this.wordLengthMap.incrementValue(wordLength) : _this.wordLengthMap.addValue(wordLength);
        });
    };
    return WordCounter;
})();
exports.WordCounter = WordCounter;
//# sourceMappingURL=WordCounter.js.map