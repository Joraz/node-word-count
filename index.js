/// <reference path="./typings/index.d.ts" />
"use strict";
var fs = require("fs");
var WordCounter_1 = require("./src/objects/WordCounter");
var ObjectUtilities_1 = require("./src/utilities/ObjectUtilities");
var filePath = process.argv[2];
if (!ObjectUtilities_1.isDefined(filePath)) {
    console.log(new Error("No path to file supplied. Run npm start -- your/path/to/file.txt"));
}
else {
    fs.readFile(filePath, function (err, data) {
        if (err) {
            console.log("Read operation was not successful. Error message: " + err);
        }
        else {
            var wordCount = new WordCounter_1.WordCounter(data.toString("utf-8"));
            console.log(wordCount.toString());
        }
    });
}
//# sourceMappingURL=index.js.map