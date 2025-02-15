//write a javascript function named "applyDiscount" which will take a paramter as discount percentage and return inner function.
//the inner function will take product price as paramter and return final price after discount

const applyDiscount = (discountPercent) =>{
    return (productPrice) =>{
        return (productPrice - (productPrice * (discountPercent / 100))).toFixed(2);
    }
}

const Tshirt = applyDiscount(15);

console.log(Tshirt(2500))
console.log(Tshirt(1999))

const Bag = applyDiscount(28);

console.log(Bag(3900))