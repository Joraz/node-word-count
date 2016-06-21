/// <reference path="../../typings/index.d.ts" />
"use strict";
var ObjectUtilities = require("../utilities/ObjectUtilities");
var chai = require("chai");
describe("ObjectUtilities Tests", function () {
    describe("isDefined", function () {
        describe("When item is null", function () {
            it("should return false", function () {
                var isDefined = ObjectUtilities.isDefined(null);
                chai.expect(isDefined).to.be.false;
            });
        });
        describe("When item is undefined", function () {
            it("should return false", function () {
                var isDefined = ObjectUtilities.isDefined(undefined);
                chai.expect(isDefined).to.be.false;
            });
        });
        describe("When item is an empty object", function () {
            it("should return true", function () {
                var isDefined = ObjectUtilities.isDefined({});
                chai.expect(isDefined).to.be.true;
            });
        });
        describe("When item is a string", function () {
            describe("When an empty string is supplied", function () {
                it("should return true", function () {
                    var isDefined = ObjectUtilities.isDefined("");
                    chai.expect(isDefined).to.be.true;
                });
            });
            describe("When a string consisting of white space is supplied", function () {
                it("should return true", function () {
                    var isDefined = ObjectUtilities.isDefined(" ");
                    chai.expect(isDefined).to.be.true;
                });
            });
            describe("When a string consisting of non-white space is supplied", function () {
                it("should return true", function () {
                    var isDefined = ObjectUtilities.isDefined("abc");
                    chai.expect(isDefined).to.be.true;
                });
            });
        });
        describe("When item is an array", function () {
            describe("When an empty array is supplied", function () {
                it("should return true", function () {
                    var isDefined = ObjectUtilities.isDefined([]);
                    chai.expect(isDefined).to.be.true;
                });
            });
            describe("When an array of at least one element is supplied", function () {
                it("should return true", function () {
                    var isDefined = ObjectUtilities.isDefined([123]);
                    chai.expect(isDefined).to.be.true;
                });
            });
        });
    });
});
//# sourceMappingURL=ObjectUtilitiesSpec.js.map