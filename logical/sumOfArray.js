// Problem statement
// You are tasked with creating a program that processes an array of positive integers. Your goal is to find the sum of all even numbers in the array, but you need to implement a special condition: if you encounter a number that is a multiple of 5, you should skip it and move on to the next element without including it in the sum.



// Expected Input
// [1,6,8,3,5,20,10]
// Expected Output
// 14

function sumOfArray(arr){
    let sum = 0;

    for(let i of arr){
        if(i % 2 !== 0 || i % 2 === 0 && i % 5 === 0){
            continue;
        }

        sum += i;
    }

    return sum;
}

const array = [1,6,8,3,5,20,10];
console.log(sumOfArray(array))