/// <reference path="../../typings/index.d.ts" />

import ObjectUtilities = require("../utilities/ObjectUtilities");
import chai = require("chai");

describe("ObjectUtilities Tests", () =>
{
	describe("isDefined", () =>
	{
		describe("When item is null", () =>
		{
			it("should return false", () =>
			{
				var isDefined = ObjectUtilities.isDefined(null);
				chai.expect(isDefined).to.be.false;
			});
		});

		describe("When item is undefined", () =>
		{
			it("should return false", () =>
			{
				var isDefined = ObjectUtilities.isDefined(undefined);
				chai.expect(isDefined).to.be.false;
			});
		});

		describe("When item is an empty object", () =>
		{
			it("should return true", () =>
			{
				var isDefined = ObjectUtilities.isDefined({});
				chai.expect(isDefined).to.be.true;
			});
		});

		describe("When item is a string", () =>
		{
			describe("When an empty string is supplied", () =>
			{
				it("should return true", () =>
				{
					var isDefined = ObjectUtilities.isDefined("");
					chai.expect(isDefined).to.be.true;
				});
			});

			describe("When a string consisting of white space is supplied", ()=>
			{
				it("should return true", () =>
				{
					var isDefined = ObjectUtilities.isDefined(" ");
					chai.expect(isDefined).to.be.true;
				});
			});

			describe("When a string consisting of non-white space is supplied", ()=>
			{
				it("should return true", () =>
				{
					var isDefined = ObjectUtilities.isDefined("abc");
					chai.expect(isDefined).to.be.true;
				});
			});
		});

		describe("When item is an array", () =>
		{
			describe("When an empty array is supplied", () =>
			{
				it("should return true", () =>
				{
					var isDefined = ObjectUtilities.isDefined([]);
					chai.expect(isDefined).to.be.true;
				});
			});

			describe("When an array of at least one element is supplied", () =>
			{
				it("should return true", () =>
				{
					var isDefined = ObjectUtilities.isDefined([123]);
					chai.expect(isDefined).to.be.true;
				});
			});
		});
	});
});