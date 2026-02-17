// 1-callstack.js
// Understanding LIFO (Last In, First Out)

function first() {
  console.log("1. Inside First Function");
}

function second() {
  console.log("2. Inside Second Function");
}

console.log("Start");
first();  // Pushed to Call Stack -> Executed -> Popped
second(); // Pushed to Call Stack -> Executed -> Popped
console.log("End");