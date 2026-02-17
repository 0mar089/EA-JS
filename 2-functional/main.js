
// ------------------ Functional Programming ------------------
// Emphasizes the use of pure functions and avoids shared state and mutable data.

const numbers = [1, 2, 3, 4, 5];


// ❌ Imperative (Non-Functional) Approach
const doubledNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// ✅ Functional (Declarative) Approach
doubledFunctional = numbers.map(num => num * 2);
console.log(doubledFunctional); // [2, 4, 6, 8, 10]

// ------------------ Pure Functions vs Side Effects ------------------

// Functions can be stored in variables, passed as arguments, or returned.
const greet = function(name) {
	return `Hello, ${name}!`;
  };
  
console.log(greet("Alice")); // "Hello, Alice!"

// ❌ Impure Function: It modifies an external variable (Side Effect)
let total = 0;
function addToTotal(amount) {
    total += amount; 
    return total;
}

// ✅ Pure Function: Predictable. No external dependencies.
// Always returns the same output for the same input
// No Side Effects - Does not modify external state

function add(a, b) {
	return a + b;
}
  
console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (always the same output)


// Immutability
// Data should not be changed; use copies instead.

const originalArray = [1, 2, 3, 4];

//  ✅ Functional (Creates a new array)
// Use Spread Operator to create a copy
const newArray = [...originalArray, 5];
console.log(newArray); // [1, 2, 3, 4, 5]

// Non-functional (Mutates the array)
// ❌ Avoid mutation
originalArray.push(5); 

//  ✅ Update property without mutating the original object
const user = { name: 'Juan', age: 25 };
const updatedUser = { ...user, age: 26 };

console.log("Original User:", user); // Age is still 25
console.log("Updated User:", updatedUser); // New object with age 26

// ------------------ Higher-Order Functions (HOF) ------------------
// Functions that take other functions as arguments or return functions.

const logger = (operation, a, b) => {
    console.log(`Executing operation with values: ${a}, ${b}`);
    return operation(a, b);
};

const result = logger(add, 5, 10);
console.log(`Result: ${result}`);




