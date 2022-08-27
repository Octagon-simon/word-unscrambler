# WORD UNSCRAMBLER
##

This tiny package helps to unscramble any word as long as the word exists in the dictionary.

## HOW TO INSTALL

```bash
$ npm install word-unscrambler
```
## HOW TO USE
- Require the module
- Invoke the function and pass in a scrambled word
- Handle the result

```javascript
//require the module
const unscramble = require('word-unscrambler');

//invoke the function and handle the result
unscramble("vjatspiarc").then( result => {
    console.log(result);
});

//result => ["javascript"]
```

## RETURN TYPE

This function returns an `array` containing the words that match the scrambled letters or an empty `array` if no words were found.

So in your app, you can do something like this

```javascript
//require the module
const unscramble = require('word-unscrambler');

//invoke the function and handle the result
unscramble("vjatspiarc").then( result => {
    //check if array is empty or not
    if( result.length !== 0 ){
        console.log(result);
    }else{
        console.log("No words found")
    }
});

//result => ["javascript"]
```

## Author

[Simon Ugorji](https://twitter.com/ugorji_simon)

## Support Me

[Donate with PayPal](https://www.paypal.com/donate/?hosted_button_id=ZYK9PQ8UFRTA4)

## Contributors

[Simon Ugorji](https://twitter.com/ugorji_simon)