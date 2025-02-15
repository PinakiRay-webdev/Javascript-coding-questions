//create a custom map function which will perform an operation on each and every element of an array and returns a new Array.
//That function must take 2 paramters i.e one as input array and 2nd as function which will apply upon array elements

const customMap = (array , func) =>{
    const newArray = [];

    for(let element of array){
        newArray.push(func(element))
    }

    return newArray;
}

//creating a square function
const square = (num) =>{
    return num ** 2;
}

//creating a cube function
const cube = (num) =>{
    return num ** 3;
}

const incrementByOne = (num) =>{
    return ++num;
}

const array = [2, 4, 6, 8, 10];

console.log(customMap(array , square))
console.log(customMap(array , cube))
console.log(customMap(array , incrementByOne))