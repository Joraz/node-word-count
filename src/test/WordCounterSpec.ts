/// <reference path="../../typings/index.d.ts" />

import chai = require("chai");
import {WordCounter} from "../objects/WordCounter";

describe("WordCounter Tests", () =>
{
	describe("When given a null parameter", () =>
	{
		it("should throw an error", () =>
		{
			chai.expect(() =>
			{
				let x = new WordCounter(null);
			}).to.throw("WordCounter cannot accept a null or undefined 'contents' parameter");
		});
	});

	describe("When given an undefined parameter", () =>
	{
		it("should throw an error", () =>
		{
			chai.expect(() =>
			{
				let x;
				let y = new WordCounter(x);
			}).to.throw("WordCounter cannot accept a null or undefined 'contents' parameter");
		});
	});

	describe("When given a string parameter of text", () =>
	{
		it("should parse the contents and return the defined representation when toString() is called", () =>
		{
			const phrase = "Hello world & good morning. The date is 18/05/2016";
			const wordCounter = new WordCounter(phrase);
			chai.expect(wordCounter.toString()).to.equal("Word count = 9\nAverage word length = 4.556\nNumber of words of length 1 is 1\nNumber of words of length 2 is 1\nNumber of words of length 3 is 1\nNumber of words of length 4 is 2\nNumber of words of length 5 is 2\nNumber of words of length 7 is 1\nNumber of words of length 10 is 1\nThe most frequently occurring word length is 2, for word lengths of 4 & 5");
		});
	});
});