import {isDefined} from "../utilities/ObjectUtilities";

interface IWordLengthInternalValueMap
{
	[index: string]: number
}

export class WordLengthMap
{
	private internalValueMap: IWordLengthInternalValueMap = {};

	constructor()
	{

	}

	public addValue(key: string): void
	{
		if (this.keyExists(key))
		{
			throw new Error("Cannot add key " + key + " because it already exists");
		}

		this.internalValueMap[key] = 1;
	}

	public keyExists(key: string): boolean
	{
		return isDefined(this.internalValueMap[key]);
	}

	public incrementValue(key: string): void
	{
		if (!this.keyExists(key))
		{
			throw new Error("Cannot increment key " + key + " because it does not exist");
		}

		this.internalValueMap[key]++;
	}

	public getKeys(count?: number): Array<string>
	{
		let keys: Array<string> = [];

		for (const key in this.internalValueMap)
		{
			if (this.internalValueMap.hasOwnProperty(key))
			{
				if (isDefined(count))
				{
					if (this.internalValueMap[key] === count)
					{
						keys.push(key);
					}
				}
				else
				{
					keys.push(key);
				}
			}
		}

		return keys;
	}

	public getValuesMultipliedByKey(): Array<number>
	{
		let values: Array<number> = [];

		for (const key in this.internalValueMap)
		{
			if (this.internalValueMap.hasOwnProperty(key))
			{
				values.push(this.internalValueMap[key] * parseInt(key));
			}
		}

		return values;
	}

	public getMostFrequentValue(): number
	{
		let highestCount = 0;

		for (const key in this.internalValueMap)
		{
			if (this.internalValueMap.hasOwnProperty(key))
			{
				const value = this.internalValueMap[key];

				if (value > highestCount)
				{
					highestCount = value;
				}
			}
		}

		return highestCount;
	}

	public toString(): string
	{
		let returnStr = "";

		for(const key in this.internalValueMap)
		{
			if (this.internalValueMap.hasOwnProperty(key))
			{
				const value = this.internalValueMap[key];

				returnStr += `Number of words of length ${key} is ${value}\n`;
			}
		}

		return returnStr;
	}
}