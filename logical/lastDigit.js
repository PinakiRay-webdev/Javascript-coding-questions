// Create a JavaScript function called lastDigit that takes two numbers, num1 and num2, as arguments. The function should determine whether the last digit of both numbers is equal. If the last digits are equal, the function should return true; otherwise, it should return false.



// Expected Input
// num1 = 29
// num2 = 19
// Expected Output
// true


// Expected Output
// num1 = 12
// num2 = 24
// Expected Output
// false

function lastDigit(num1 , num2){
    let lastDigitOfNum1 = num1 % 10;
    let lastDigitOfNum2 = num2 % 10;

    return lastDigitOfNum1 === lastDigitOfNum2 ? true : false;
}

console.log(lastDigit(24 , 14))