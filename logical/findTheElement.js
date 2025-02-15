// Problem statement
// You have been given an array and a number. Your task is to find the number in the array and return the index of that number. If the element is not present in the array return -1.



// Expected Input
// arr=[23,43,67,89,62,29]
// ele= 67
// Expected Output
// 2


// Expected Input
// arr=[23,43,67,89,62,29]
// ele= 82
// Expected Output
// -1

function findTheNumber(arr , key){
    let position = arr.indexOf(key);
    return position;
}

const array = [23,43,67,89,62,29];
const key = 617;

const location = findTheNumber(array , key);

console.log(location !== -1 ? `Element is present at index number ${location}` : `${key} is not present`)