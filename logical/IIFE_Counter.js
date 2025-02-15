// Create a Counter system using an Immediately Invoked Function Expression (IIFE) to encapsulate a private variable and provide methods to interact with it. The system should include two methods, increment and decrement, which will increase and decrease the count respectively and return messages displaying the updated count.

// The Counter system must ensure:

// The count variable remains private and cannot be accessed directly.
// The increment method increases the count by 1 and returns a message in the format: "Count after increment: X", where X is the updated count.
// The decrement method decreases the count by 1 and returns a message in the format: "Count after decrement: X", where X is the updated count.

// Expected Input
// counter.increment()
// counter.increment()
// counter.decrement()
// Expected Output
// Count after increment: 1
// Count after increment: 2
// Count after decrement: 1

const counter = (function () {
  let count = 0; //declaring a private variable;

  return {
    increment: function () {
      count++;
      return `Count after increment is ${count}`;
    },
    decrement: function () {
      count--;
      return `Count after decrement is ${count}`;
    },
  };
})();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
