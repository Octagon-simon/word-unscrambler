# WORD UNSCRAMBLER

This tiny package helps to unscramble any word as long as the word exists in the dictionary.

## HOW TO INSTALL

```bash
$ npm install word-unscrambler
```
## SYNTAX

```javascript
//require the module
const unscramble = require('word-unscrambler');

//syntax
unscramble(scrambled_word: string, custom_dictionary: array).then( result => {
    console.log(result);
});

```

## HOW TO USE

- Require the module
- Invoke the function and pass in a scrambled word
- Handle the result

```javascript
//require the module
const unscramble = require('word-unscrambler');

//invoke the function and handle the result
unscramble("rgranomimpg").then( result => {
    console.log(result);
});

//result => ["programming"]
```
## RETURN TYPE

This function returns an `array` containing the words that match the scrambled letters or an empty `array` if no words were found.

So in your app, you can check if the result (the array) contains items or not.

```javascript
//require the module
const unscramble = require('word-unscrambler');

//invoke the function and handle the result
unscramble("rgranomimpg").then( result => {
    //check if array is empty or not
    if( result.length !== 0 ){
        console.log(result);
    }else{
        console.log("No words found")
    }
});

//result => ["programming"]
```

## CUSTOM DICTIONARY

> The use of a custom dictionary is optional.

If you have a custom dictionary that you would like to use, make sure the dictionary is an array containing the words to be filtered, then invoke the function like this.

```javascript
//require the module
const unscramble = require('word-unscrambler');
//custom dictionary
const dict = ["before", "bizarre", "brazier"];

//invoke the function and handle the result
unscramble("rrazeib", dict).then( result => {
    console.log(result);
});

//result => ["bizarre", "brazier"]
```

## HOW TO BUILD THIS PACKAGE

With a few lines of code, you can build a package exactly like this. [Read the article on medium](https://javascript.plainenglish.io/how-to-create-a-simple-word-unscrambler-with-javascript-86bcd52c9c2c)

## LIVE DEMO

Check out the [Live Demo of this package here](https://octagon-simon.github.io/projects/unscrambler/)

## Author

[Simon Ugorji](https://twitter.com/ugorji_simon)

## Support Me

[Donate with PayPal](https://www.paypal.com/donate/?hosted_button_id=ZYK9PQ8UFRTA4)

## Contributors

[Simon Ugorji](https://twitter.com/ugorji_simon)