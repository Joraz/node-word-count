/// <reference path="../../typings/index.d.ts" />

import chai = require("chai");
import {WordLengthMap} from "../objects/WordLengthMap";

let wordLengthMap: WordLengthMap;

beforeEach(() =>
{
	wordLengthMap = new WordLengthMap();
});

describe("WordLengthMap Tests", () =>
{
	describe("addValue", () =>
	{
		describe("When called with a null key", () =>
		{
			it("should throw an error", () =>
			{
				chai.expect(() =>
				{
					wordLengthMap.addValue(null);
				}).to.throw("No key supplied at WordLengthMap.addValue()");
			});
		});

		describe("When called with an undefined key", () =>
		{
			it("should throw an error", () =>
			{
				chai.expect(() =>
				{
					let x;
					wordLengthMap.addValue(x);
				}).to.throw("No key supplied at WordLengthMap.addValue()");
			});
		});

		describe("When called with a key that already exists", () =>
		{
			it("should throw an error", () =>
			{
				//add a key
				wordLengthMap.addValue("1");
				//try to add again
				chai.expect(() =>
				{
					wordLengthMap.addValue("1");
				}).to.throw("Cannot add key 1 because it already exists");
			});
		});

		describe("When called with a key that does not exist", () =>
		{
			it("should add the key, and initialise the value to one", () =>
			{
				wordLengthMap.addValue("1");
				chai.expect(wordLengthMap.getValue("1")).to.equal(1);
			});
		});
	});

	describe("keyExists", () =>
	{
		describe("When the key exists", () =>
		{
			it("should return true", () =>
			{
				wordLengthMap.addValue("1");
				chai.expect(wordLengthMap.keyExists("1")).to.equal(true);
			});
		});

		describe("When the key does not exist", () =>
		{
			it("should return false", () =>
			{
				wordLengthMap.addValue("1");
				chai.expect(wordLengthMap.keyExists("7")).to.equal(false);
			});
		});
	});

	describe("incrementValue", () =>
	{
		describe("When called with a key that does not exist", () =>
		{
			it("should throw an error", () =>
			{
				wordLengthMap.addValue("1");
				chai.expect(() =>
				{
					wordLengthMap.incrementValue("7");
				}).to.throw("Cannot increment key 7 because it does not exist");
			});
		});

		describe("When called with a key that does exist", () =>
		{
			it("should increment the value for that key by one", () =>
			{
				wordLengthMap.addValue("1");
				wordLengthMap.incrementValue("1");
				chai.expect(wordLengthMap.getValue("1")).to.equal(2);
			});
		});
	});

	describe("getKeys", () =>
	{
		describe("When no count parameter is specified", () =>
		{
			it("should return all keys", () =>
			{
				wordLengthMap.addValue("1");
				wordLengthMap.addValue("8");
				wordLengthMap.addValue("5");
				wordLengthMap.addValue("4");
				wordLengthMap.addValue("101");

				const keys = wordLengthMap.getKeys();
				chai.expect(keys).to.have.lengthOf(5);
				chai.expect(keys[0]).to.equal("1");
				chai.expect(keys[1]).to.equal("4");
				chai.expect(keys[2]).to.equal("5");
				chai.expect(keys[3]).to.equal("8");
				chai.expect(keys[4]).to.equal("101");
			});
		});

		describe("When a count parameter is given", () =>
		{
			it("should return only those keys whose value matches the count", () =>
			{
				wordLengthMap.addValue("1");
				wordLengthMap.addValue("8");
				wordLengthMap.addValue("5");
				wordLengthMap.addValue("4");
				wordLengthMap.addValue("101");

				//increment a couple
				wordLengthMap.incrementValue("5");
				wordLengthMap.incrementValue("8");

				const keys = wordLengthMap.getKeys(2);
				chai.expect(keys).to.have.lengthOf(2);
				chai.expect(keys[0]).to.equal("5");
				chai.expect(keys[1]).to.equal("8");
			});
		});
	});

	describe("getValuesMultipliedByKey", () =>
	{
		describe("When called", () =>
		{
			it("should return an array of numbers which are the each key multipled by the current value", () =>
			{
				wordLengthMap.addValue("1");
				wordLengthMap.addValue("8");
				wordLengthMap.addValue("5");
				wordLengthMap.addValue("4");
				wordLengthMap.addValue("101");

				wordLengthMap.incrementValue("5");
				wordLengthMap.incrementValue("8");

				const values = wordLengthMap.getValuesMultipliedByKey();
				chai.expect(values).to.have.lengthOf(5);
				chai.expect(values[0]).to.equal(1);
				chai.expect(values[1]).to.equal(4);
				chai.expect(values[2]).to.equal(10);
				chai.expect(values[3]).to.equal(16);
				chai.expect(values[4]).to.equal(101);
			});
		});
	});

	describe("getMostFrequentValue", () =>
	{
		it("should return the value found the most", () =>
		{
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

	describe("toString", () =>
	{
		it("should return a string representation of the current map", () =>
		{
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