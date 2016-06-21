import {isDefined} from "../utilities/ObjectUtilities"
import {WordLengthMap} from "./WordLengthMap";

/**
 * Assumptions made when developing this:
 * 1. 'Words' are groups of characters separated by a space character.
 * 2. Common punctuation characters are not counted when defining word length.
 * 3. Abbreviation characters (&, for example) are a word by themselves. The length will be the character(s) themselves, not what they represent.
 * 4. Dates in numerical format (18/05/2016) are counted as a single word, and the delimiter characters are included
 */
export class WordCounter
{
	private length: number;
	private wordLengthMap: WordLengthMap;

	constructor(contents: string)
	{
		if (!isDefined(contents))
		{
			throw new Error("WordCounter cannot accept a null or undefined 'contents' property");
		}

		this.wordLengthMap = new WordLengthMap();

		this.parseContents(contents);
	}

	public toString(): string
	{
		let returnValue: string = "";

		returnValue += `Word count = ${this.length}\n`;

		const average = this.getAverageWordLength().toFixed(3);
		returnValue += `Average word length = ${average}\n`;

		returnValue += this.wordLengthMap.toString();

		returnValue += this.getFrequentlyOccurringString();

		return returnValue;
	}

	private getAverageWordLength(): number
	{

		const wordCountTotal = this.wordLengthMap.getValuesMultipliedByKey().reduce((a: number, b: number) =>
		                                                                            {
			                                                                            return a + b;
		                                                                            }, 0);

		return wordCountTotal / this.length;
	}

	private getFrequentlyOccurringString(): string
	{
		const mostFrequentCount: number = this.wordLengthMap.getMostFrequentValue();
		const mostFrequentCountKeys: Array<string> = this.wordLengthMap.getKeys(mostFrequentCount);
		const mostFrequentCountKeysLength: number = mostFrequentCountKeys.length;

		let returnStr: string = `The most frequently occurring word length is ${mostFrequentCount}, for word length${mostFrequentCountKeysLength > 1 ? "s" : ""} of `;

		if (mostFrequentCountKeysLength === 1)
		{
			returnStr += mostFrequentCountKeys[0];
		}
		else if (mostFrequentCountKeysLength === 2)
		{
			returnStr += mostFrequentCountKeys[0] + " & " + mostFrequentCountKeys [1];
		}
		else
		{
			const lastIndex = mostFrequentCountKeysLength - 1;

			mostFrequentCountKeys.forEach((key: string, index: number) =>
			                              {
				                              if (index === 0)
				                              {
					                              returnStr += key;
				                              }
				                              else if (index != lastIndex)
				                              {
					                              returnStr += ", " + key;
				                              }
				                              else
				                              {
					                              returnStr += " & " + key;
				                              }
			                              });
		}

		return returnStr;
	}

	private parseContents(contents: string): void
	{
		contents = contents.replace(/(\r\n|\n|\r)/gm, " ");

		let wordArray: Array<string> = contents.split(" ");

		wordArray = wordArray.filter((word: string) =>
		                             {
			                             return word.length > 0;
		                             });

		this.length = wordArray.length;

		// If there are no words, there is nothing to process, so return from the method.
		if (this.length === 0)
		{
			return;
		}

		// Could be re-written into a native 'for' loop if performance with large files is a concern
		wordArray.forEach((word: string) =>
		                  {
			                  let filteredWord = word.replace(/[.,!?'"]+/g, "");

			                  const wordLength: string = filteredWord.length.toString();

			                  this.wordLengthMap.keyExists(wordLength) ? this.wordLengthMap.incrementValue(wordLength) : this.wordLengthMap.addValue(wordLength);
		                  });
	}
}