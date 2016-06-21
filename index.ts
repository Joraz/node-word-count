/// <reference path="./typings/index.d.ts" />

import * as fs from "fs";

import {WordCounter} from "./src/objects/WordCounter";
import {isDefined} from "./src/utilities/ObjectUtilities";

let filePath = process.argv[2];

if (!isDefined(filePath))
{
	console.log(new Error("No path to file supplied. Run npm start -- your/path/to/file.txt"));
}
else
{
	fs.readFile(filePath, (err: any, data: Buffer) =>
	{
		if (err)
		{
			console.log("Read operation was not successful. Error message: " + err);
		}
		else
		{
			const wordCount = new WordCounter(data.toString("utf-8"));

			console.log(wordCount.toString());
		}
	});
}