// You have been given a string your task is to reverse and return the updated string



// Expected Input
// "Hello"
// Expected Output
// "olleH"

function reverseString(str){
    return str.split('').reverse().join('');
}

const str = "hello"
console.log(reverseString(str))