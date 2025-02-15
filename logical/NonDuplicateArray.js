// You have been provided with two arrays your task is to merge both arrays while removing the duplicate elements from the merged array.



// Expected Input
//  arr1= [1,2,3,4,5,6,7]
//  arr2 = [5,6,7,8,9]
// Expected Output
// [1,2,3,4,5,6,7,8,9]

function mergeArray(arr1, arr2){
    const merged = [...arr1 , ...arr2];

    const nonDuplicatedArray = [];
    for(let i of merged){
        if(!nonDuplicatedArray.includes(i)){
            nonDuplicatedArray.push(i);
        }
    }

    return nonDuplicatedArray;
}

const arr1 = [1,2,4,5,7];
const arr2 = [3,4,6,7,9,0];

console.log(mergeArray(arr1 , arr2))    //Output : [1,2,4,5,7,3,6,9,0]