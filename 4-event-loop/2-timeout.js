// 2-timeout.js
// The Event Loop: Call Stack vs Callback Queue
// The Event Loop only pushes the Callback Queue to the Stack 
// when the Stack is completely empty.

console.log("1. Start");

// Even with 0ms, this goes to the Web APIs -> Callback Queue
setTimeout(() => {
    console.log("3. Timeout (Callback Queue)");
}, 0);

console.log("2. End");

