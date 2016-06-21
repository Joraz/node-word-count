# Running the utility:

All commands run from root

### Install 'typings' globally

`npm i -g typings`

###Install dependencies

`npm i`

###Run tests

`npm test`

###Run app

`npm start path/to/text/file.txt`

###Assumptions made

1. 'Words' are groups of characters separated by a space character.
2. Common punctuation characters are not counted when defining word length.
3. Abbreviation characters (&, for example) are a word by themselves. The length will be the character(s) themselves, not what they represent.
4. Dates in numerical format (18/05/2016) are counted as a single word, and the delimiter characters are included