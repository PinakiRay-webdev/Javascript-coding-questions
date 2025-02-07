// Develop a JavaScript function called commonDigits that accepts two positive integers, num1, and num2, as parameters. The function should determine whether the numbers have an equal number of digits or not. If they have an equal number of digits then store true in the answer else store false.



// Expected Input
// num1 = 78574
// num2 = 78392
// Expected Output
// true


// Expected Input
// num1 = 74847
// num2 = 781
// Expected Output
// false

function commonDigits(num1 , num2){
    num1 = num1.toString();
    num2 = num2.toString();

    return num1.length === num2.length ? true : false
}

console.log(commonDigits(74847 , 78145))