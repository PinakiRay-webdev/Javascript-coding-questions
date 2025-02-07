// Design a JavaScript function named findDuplicate to identify and extract all duplicate elements from an array. The function should accept an array as a parameter and create a new array containing only the duplicate elements found in the input array. The resulting array should be returned.

// Expected Input
// [4,56,54,3,56,36,54]
// Expected Output
// [56,54]

let arr = [4, 2, 34, 4, 1, 12, 1, 4];

function findDuplicates(arr) {
  let duplicateArray = [];

  arr = arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1] && !duplicateArray.includes(arr[i])) {
      duplicateArray.push(arr[i]);
    }
  }

  return duplicateArray;
}

console.log(findDuplicates(arr));
