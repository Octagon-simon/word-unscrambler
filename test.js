//include the module
const unscramble = require('./src/index')

//unscramble the word
console.log("unscrambling the word rgranomimpg...")

unscramble("rgranomimpg").then(a => {
    console.log(a)
})