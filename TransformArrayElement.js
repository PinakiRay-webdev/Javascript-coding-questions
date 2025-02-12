// Problem statement
// Write a function transformNumbers that takes an array of numbers and performs the following transformations:



// Square each number in the array.
// If the number is even, double its squared value.
// Return the transformed array.


// The function should utilize the map method to implement the transformations.



// Expected Input
// [2, 4, 6, 8, 7]
// Expected Output
// [8, 32, 72, 128, 49]

const transformNumber = (array) =>{
    const updatedArray =  array.map((element) =>(
        (element * element) % 2 === 0 ? (element * element) * 2 : (element * element)
    ))

    return updatedArray;
}

const numbers = [2, 4, 6, 8, 7];

console.log(transformNumber(numbers))