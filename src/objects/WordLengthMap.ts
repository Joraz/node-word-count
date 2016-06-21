import {isDefined} from "../utilities/ObjectUtilities";

/**
 * Represents the internal map for the WordLengthMap class
 */
interface IWordLengthInternalValueMap
{
	[index: string]: number
}

/**
 * A map with the keys being the length of a word, and the value the amount of times it is found
 */
export class WordLengthMap
{
	private internalValueMap: IWordLengthInternalValueMap = {};

	constructor()
	{

	}

	/**
	 * Add a new value of 1 to the map with the given key
	 * @param key
	 */
	public addValue(key: string): void
	{
		if (!isDefined(key))
		{
			throw new Error("No key supplied at WordLengthMap.addValue()");
		}

		if (this.keyExists(key))
		{
			throw new Error("Cannot add key " + key + " because it already exists");
		}

		this.internalValueMap[key] = 1;
	}

	/**
	 * Get the value from the given key
	 * @param key
	 * @returns {number}
	 */
	public getValue(key: string): number
	{
		return this.internalValueMap[key];
	}

	/**
	 * Returns true or false based on whether or not the key exists
	 * @param key
	 * @returns {boolean}
	 */
	public keyExists(key: string): boolean
	{
		return isDefined(this.internalValueMap[key]);
	}

	/**
	 * Increment the value by one that is associated with the given key
	 * @param key
	 */
	public incrementValue(key: string): void
	{
		if (!this.keyExists(key))
		{
			throw new Error("Cannot increment key " + key + " because it does not exist");
		}

		this.internalValueMap[key]++;
	}

	/**
	 * Returns all the current keys. If 'count' is specified, will return only those keys whose value matches it
	 * @param count
	 * @returns {Array<string>}
	 */
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

	/**
	 * Retrieves each value multiplied by its key
	 * @returns {Array<number>}
	 */
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

	/**
	 * Returns the most frequent value
	 * @returns {number}
	 */
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

	/**
	 * Returns a string representation of the map
	 * @returns {string}
	 */
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