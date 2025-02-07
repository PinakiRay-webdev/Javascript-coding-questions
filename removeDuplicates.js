// Design a JavaScript function named removeDuplicate to identify and remove all duplicate elements from an array without using SET 

// Expected Input
// [4,56,54,3,56,36,54]
// Expected Output
// [4,3,36]


let arr = [4, 2, 34, 4, 1, 12, 1, 4];

function removeDuplicate(arr){
    let newArray = [];

    for(let i of arr){
        if(!newArray.includes(i)){
            newArray.push(i)
        }
    }

    return newArray;
}

console.log(removeDuplicate(arr))


