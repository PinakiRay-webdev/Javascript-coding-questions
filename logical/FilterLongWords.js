// Problem statement
// Write a JavaScript function that filters an array of words and returns a new array containing only the words with a length greater than or equal to a specified minimum length. 
// This task will involve using the filter method to implement the logic.



// Expected Input
// words = ["apple", "banana", "kiwi", "grape", "watermelon"];
// minLength = 5;
// Expected Output
// ["apple", "banana", "grape", "watermelon"]

const filterLongWords = (words , minLength) =>{
    const filteredWord = words.filter((word) => word.length >= minLength);
    return filteredWord;
}

const words = ["apple", "banana", "kiwi", "grape", "watermelon"];
const minLength = 5;

console.log(filterLongWords(words , minLength))