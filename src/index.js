//require the dictionary
const dict = require('an-array-of-english-words');
//make the function async
async function unscramble(word) {
    //return the result
    return (
        dict.filter(item => {
            //handle reoccurrences
            const reOccurrence1 = {};
            const reOccurrence2 = {};
            //check if their lengths are equal
            if (item.length === word.length) {
                //convert the current item to array and loop through
                item.split('').forEach(letter => {
                    //store the number of reoccurrences of each letter
                    reOccurrence1[letter] = reOccurrence1[letter] + 1 || 1;
                });
                //convert word to array and loop through
                word.split('').forEach(letter => {
                    //store the number of reoccurrences of each letter
                    reOccurrence2[letter] = reOccurrence2[letter] + 1 || 1;
                });
                //counter to increase on every match found
                let match = 0;
                for (let key in reOccurrence1) {
                    if (reOccurrence1[key] === reOccurrence2[key]) {
                        match++;
                    }
                }
                //return item
                return ((Object.keys(reOccurrence1).length === match) ? item : false);
            }
            //return empty array
            return;
        })
    );
}

//export function
module.exports = unscramble;