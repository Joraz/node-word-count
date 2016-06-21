/// <reference path="../../typings/index.d.ts" />
var chai = require("chai");
var WordCounter_1 = require("../objects/WordCounter");
describe("WordCounter Tests", function () {
    describe("When given a null parameter", function () {
        it("should throw an error", function () {
            chai.expect(function () {
                var x = new WordCounter_1.WordCounter(null);
            }).to.throw("WordCounter cannot accept a null or undefined 'contents' parameter");
        });
    });
    describe("When given an undefined parameter", function () {
        it("should throw an error", function () {
            chai.expect(function () {
                var x;
                var y = new WordCounter_1.WordCounter(x);
            }).to.throw("WordCounter cannot accept a null or undefined 'contents' parameter");
        });
    });
    describe("When given a string parameter of text", function () {
        it("should parse the contents and return the defined representation when toString() is called", function () {
            var phrase = "Hello world & good morning. The date is 18/05/2016";
            var wordCounter = new WordCounter_1.WordCounter(phrase);
            chai.expect(wordCounter.toString()).to.equal("Word count = 9\nAverage word length = 4.556\nNumber of words of length 1 is 1\nNumber of words of length 2 is 1\nNumber of words of length 3 is 1\nNumber of words of length 4 is 2\nNumber of words of length 5 is 2\nNumber of words of length 7 is 1\nNumber of words of length 10 is 1\nThe most frequently occurring word length is 2, for word lengths of 4 & 5");
        });
    });
});
//# sourceMappingURL=WordCounterSpec.js.map