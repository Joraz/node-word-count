var ObjectUtilities_1 = require("../utilities/ObjectUtilities");
/**
 * A map with the keys being the length of a word, and the value the amount of times it is found
 */
var WordLengthMap = (function () {
    function WordLengthMap() {
        this.internalValueMap = {};
    }
    /**
     * Add a new value of 1 to the map with the given key
     * @param key
     */
    WordLengthMap.prototype.addValue = function (key) {
        if (!ObjectUtilities_1.isDefined(key)) {
            throw new Error("No key supplied at WordLengthMap.addValue()");
        }
        if (this.keyExists(key)) {
            throw new Error("Cannot add key " + key + " because it already exists");
        }
        this.internalValueMap[key] = 1;
    };
    /**
     * Get the value from the given key
     * @param key
     * @returns {number}
     */
    WordLengthMap.prototype.getValue = function (key) {
        return this.internalValueMap[key];
    };
    /**
     * Returns true or false based on whether or not the key exists
     * @param key
     * @returns {boolean}
     */
    WordLengthMap.prototype.keyExists = function (key) {
        return ObjectUtilities_1.isDefined(this.internalValueMap[key]);
    };
    /**
     * Increment the value by one that is associated with the given key
     * @param key
     */
    WordLengthMap.prototype.incrementValue = function (key) {
        if (!this.keyExists(key)) {
            throw new Error("Cannot increment key " + key + " because it does not exist");
        }
        this.internalValueMap[key]++;
    };
    /**
     * Returns all the current keys. If 'count' is specified, will return only those keys whose value matches it
     * @param count
     * @returns {Array<string>}
     */
    WordLengthMap.prototype.getKeys = function (count) {
        var keys = [];
        for (var key in this.internalValueMap) {
            if (this.internalValueMap.hasOwnProperty(key)) {
                if (ObjectUtilities_1.isDefined(count)) {
                    if (this.internalValueMap[key] === count) {
                        keys.push(key);
                    }
                }
                else {
                    keys.push(key);
                }
            }
        }
        return keys;
    };
    /**
     * Retrieves each value multiplied by its key
     * @returns {Array<number>}
     */
    WordLengthMap.prototype.getValuesMultipliedByKey = function () {
        var values = [];
        for (var key in this.internalValueMap) {
            if (this.internalValueMap.hasOwnProperty(key)) {
                values.push(this.internalValueMap[key] * parseInt(key));
            }
        }
        return values;
    };
    /**
     * Returns the most frequent value
     * @returns {number}
     */
    WordLengthMap.prototype.getMostFrequentValue = function () {
        var highestCount = 0;
        for (var key in this.internalValueMap) {
            if (this.internalValueMap.hasOwnProperty(key)) {
                var value = this.internalValueMap[key];
                if (value > highestCount) {
                    highestCount = value;
                }
            }
        }
        return highestCount;
    };
    /**
     * Returns a string representation of the map
     * @returns {string}
     */
    WordLengthMap.prototype.toString = function () {
        var returnStr = "";
        for (var key in this.internalValueMap) {
            if (this.internalValueMap.hasOwnProperty(key)) {
                var value = this.internalValueMap[key];
                returnStr += "Number of words of length " + key + " is " + value + "\n";
            }
        }
        return returnStr;
    };
    return WordLengthMap;
})();
exports.WordLengthMap = WordLengthMap;
//# sourceMappingURL=WordLengthMap.js.map