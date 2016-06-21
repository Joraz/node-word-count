/// <reference path="../../typings/index.d.ts" />
var chai = require("chai");
var WordLengthMap_1 = require("../objects/WordLengthMap");
var wordLengthMap;
beforeEach(function () {
    wordLengthMap = new WordLengthMap_1.WordLengthMap();
});
describe("WordLengthMap Tests", function () {
    describe("addValue", function () {
        describe("When called with a null key", function () {
            it("should throw an error", function () {
                chai.expect(function () {
                    wordLengthMap.addValue(null);
                }).to.throw("No key supplied at WordLengthMap.addValue()");
            });
        });
        describe("When called with an undefined key", function () {
            it("should throw an error", function () {
                chai.expect(function () {
                    var x;
                    wordLengthMap.addValue(x);
                }).to.throw("No key supplied at WordLengthMap.addValue()");
            });
        });
        describe("When called with a key that already exists", function () {
            it("should throw an error", function () {
                //add a key
                wordLengthMap.addValue("1");
                //try to add again
                chai.expect(function () {
                    wordLengthMap.addValue("1");
                }).to.throw("Cannot add key 1 because it already exists");
            });
        });
        describe("When called with a key that does not exist", function () {
            it("should add the key, and initialise the value to one", function () {
                wordLengthMap.addValue("1");
                chai.expect(wordLengthMap.getValue("1")).to.equal(1);
            });
        });
    });
    describe("keyExists", function () {
        describe("When the key exists", function () {
            it("should return true", function () {
                wordLengthMap.addValue("1");
                chai.expect(wordLengthMap.keyExists("1")).to.equal(true);
            });
        });
        describe("When the key does not exist", function () {
            it("should return false", function () {
                wordLengthMap.addValue("1");
                chai.expect(wordLengthMap.keyExists("7")).to.equal(false);
            });
        });
    });
    describe("incrementValue", function () {
        describe("When called with a key that does not exist", function () {
            it("should throw an error", function () {
                wordLengthMap.addValue("1");
                chai.expect(function () {
                    wordLengthMap.incrementValue("7");
                }).to.throw("Cannot increment key 7 because it does not exist");
            });
        });
        describe("When called with a key that does exist", function () {
            it("should increment the value for that key by one", function () {
                wordLengthMap.addValue("1");
                wordLengthMap.incrementValue("1");
                chai.expect(wordLengthMap.getValue("1")).to.equal(2);
            });
        });
    });
    describe("getKeys", function () {
        describe("When no count parameter is specified", function () {
            it("should return all keys", function () {
                wordLengthMap.addValue("1");
                wordLengthMap.addValue("8");
                wordLengthMap.addValue("5");
                wordLengthMap.addValue("4");
                wordLengthMap.addValue("101");
                var keys = wordLengthMap.getKeys();
                chai.expect(keys).to.have.lengthOf(5);
                chai.expect(keys[0]).to.equal("1");
                chai.expect(keys[1]).to.equal("4");
                chai.expect(keys[2]).to.equal("5");
                chai.expect(keys[3]).to.equal("8");
                chai.expect(keys[4]).to.equal("101");
            });
        });
        describe("When a count parameter is given", function () {
            it("should return only those keys whose value matches the count", function () {
                wordLengthMap.addValue("1");
                wordLengthMap.addValue("8");
                wordLengthMap.addValue("5");
                wordLengthMap.addValue("4");
                wordLengthMap.addValue("101");
                //increment a couple
                wordLengthMap.incrementValue("5");
                wordLengthMap.incrementValue("8");
                var keys = wordLengthMap.getKeys(2);
                chai.expect(keys).to.have.lengthOf(2);
                chai.expect(keys[0]).to.equal("5");
                chai.expect(keys[1]).to.equal("8");
            });
        });
    });
    describe("getValuesMultipliedByKey", function () {
        describe("When called", function () {
            it("should return an array of numbers which are the each key multipled by the current value", function () {
                wordLengthMap.addValue("1");
                wordLengthMap.addValue("8");
                wordLengthMap.addValue("5");
                wordLengthMap.addValue("4");
                wordLengthMap.addValue("101");
                wordLengthMap.incrementValue("5");
                wordLengthMap.incrementValue("8");
                var values = wordLengthMap.getValuesMultipliedByKey();
                chai.expect(values).to.have.lengthOf(5);
                chai.expect(values[0]).to.equal(1);
                chai.expect(values[1]).to.equal(4);
                chai.expect(values[2]).to.equal(10);
                chai.expect(values[3]).to.equal(16);
                chai.expect(values[4]).to.equal(101);
            });
        });
    });
    describe("getMostFrequentValue", function () {
        it("should return the value found the most", function () {
            wordLengthMap.addValue("1");
            wordLengthMap.addValue("8");
            wordLengthMap.addValue("5");
            wordLengthMap.addValue("4");
            wordLengthMap.addValue("101");
            wordLengthMap.incrementValue("5");
            wordLengthMap.incrementValue("5");
            wordLengthMap.incrementValue("5");
            wordLengthMap.incrementValue("101");
            chai.expect(wordLengthMap.getMostFrequentValue()).to.equal(4);
        });
    });
    describe("toString", function () {
        it("should return a string representation of the current map", function () {
            wordLengthMap.addValue("1");
            wordLengthMap.addValue("8");
            wordLengthMap.addValue("5");
            wordLengthMap.addValue("4");
            wordLengthMap.addValue("101");
            wordLengthMap.incrementValue("5");
            wordLengthMap.incrementValue("101");
            chai.expect(wordLengthMap.toString()).to.equal("Number of words of length 1 is 1\nNumber of words of length 4 is 1\nNumber of words of length 5 is 2\nNumber of words of length 8 is 1\nNumber of words of length 101 is 2\n");
        });
    });
});
//# sourceMappingURL=WordLengthMapSpec.js.map