"use strict";
var ObjectUtilities_1 = require("../utilities/ObjectUtilities");
var WordLengthMap_1 = require("./WordLengthMap");
/**
 * Assumptions made when developing this:
 * 1. 'Words' are groups of characters separated by a space character.
 * 2. Common punctuation characters are not counted when defining word length.
 * 3. Abbreviation characters (&, for example) are a word by themselves. The length will be the character(s) themselves, not what they represent.
 * 4. Dates in numerical format (18/05/2016) are counted as a single word, and the delimiter characters are included
 */
var WordCounter = (function () {
    function WordCounter(contents) {
        if (!ObjectUtilities_1.isDefined(contents)) {
            throw new Error("WordCounter cannot accept a null or undefined 'contents' property");
        }
        this.wordLengthMap = new WordLengthMap_1.WordLengthMap();
        this.parseContents(contents);
    }
    WordCounter.prototype.toString = function () {
        var returnValue = "";
        returnValue += "Word count = " + this.length + "\n";
        var average = this.getAverageWordLength().toFixed(3);
        returnValue += "Average word length = " + average + "\n";
        returnValue += this.wordLengthMap.toString();
        returnValue += this.getFrequentlyOccurringString();
        return returnValue;
    };
    WordCounter.prototype.getAverageWordLength = function () {
        var wordCountTotal = this.wordLengthMap.getValuesMultipliedByKey().reduce(function (a, b) {
            return a + b;
        }, 0);
        return wordCountTotal / this.length;
    };
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
            var lastIndex_1 = mostFrequentCountKeysLength - 1;
            mostFrequentCountKeys.forEach(function (key, index) {
                if (index === 0) {
                    returnStr += key;
                }
                else if (index != lastIndex_1) {
                    returnStr += ", " + key;
                }
                else {
                    returnStr += " & " + key;
                }
            });
        }
        return returnStr;
    };
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
}());
exports.WordCounter = WordCounter;
//# sourceMappingURL=WordCounter.js.map