"use strict";
var ObjectUtilities_1 = require("../utilities/ObjectUtilities");
var WordLengthMap = (function () {
    function WordLengthMap() {
        this.internalValueMap = {};
    }
    WordLengthMap.prototype.addValue = function (key) {
        if (this.keyExists(key)) {
            throw new Error("Cannot add key " + key + " because it already exists");
        }
        this.internalValueMap[key] = 1;
    };
    WordLengthMap.prototype.keyExists = function (key) {
        return ObjectUtilities_1.isDefined(this.internalValueMap[key]);
    };
    WordLengthMap.prototype.incrementValue = function (key) {
        if (!this.keyExists(key)) {
            throw new Error("Cannot increment key " + key + " because it does not exist");
        }
        this.internalValueMap[key]++;
    };
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
    WordLengthMap.prototype.getValuesMultipliedByKey = function () {
        var values = [];
        for (var key in this.internalValueMap) {
            if (this.internalValueMap.hasOwnProperty(key)) {
                values.push(this.internalValueMap[key] * parseInt(key));
            }
        }
        return values;
    };
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
}());
exports.WordLengthMap = WordLengthMap;
//# sourceMappingURL=WordLengthMap.js.map