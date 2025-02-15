// You are tasked with implementing two functions that operate on a list of names:



// findNames: This function searches for a specific name in the list and returns the name if it is found, or a message "Name not found" if it is not present.
// updateNamesIndex: This function finds the index of a specific name in the list and returns the index if found, or -1 if the name does not exist.
// These functions should utilize the array methods find and findIndex respectively, and must not use loops.



// Expected Input:
// findNames(names, "John"); 
// updateNamesIndex(names, "Emma"); 
// Expected Output:
// John
// 3

// List of names
const names = ["Alice", "John", "Michael", "Emma", "Sophia", "James"];

const findNames = (names, peopleName) => {
  const person = names.find((name) => name === peopleName);
    
	return person === undefined ? "Name not found" : person
}

const updateNamesIndex = (names, peopleName) => {
  	return names.findIndex((name) => name === peopleName);
}


console.log(findNames(names, "John"));
console.log(findNames(names, "Andrew"));

console.log(updateNamesIndex(names, "Emma"));
console.log(updateNamesIndex(names, "Mark")); 