// reference https://javascript.info/array-methods

// ------------------ Array Manipulation (Immutable Patterns) ------------------
// In Applied Engineering, we avoid mutating the original data to prevent bugs.

// 1. Adding elements (The Immutable Way)
const baseWords = ["I", "go"];
// baseWords.push("home"); // ❌ Mutates the original array
// Instead of .push(), we create a NEW array
const finalWords = [...baseWords, "home"]; 
console.log("Original:", baseWords); // ["I", "go"]
console.log("New:", finalWords);      // ["I", "go", "home"]

// 2. Prepending (Adding to the start)
const sensorData = [20, 30, 50, 60];
const expandedData = [5, 7, ...sensorData];
console.log("Expanded Data:", expandedData);

// 3. Extracting parts (Slice)
// slice(start, end) returns a copy of a portion of an array
const firstTwoElements = sensorData.slice(0, 2); 
console.log("Sliced (First 2):", firstTwoElements); // [20, 30]

// 4. Inserting into the middle (The "Spread + Slice" Strategy)
// Task: Insert 40 before 50
const targetValue = 50;
const index = sensorData.indexOf(targetValue);

const insertedArray = [
  ...sensorData.slice(0, index), // Elements before 50
  40,                            // New element
  ...sensorData.slice(index)     // Elements from 50 onwards
];
console.log("After Insertion:", insertedArray); // [20, 30, 40, 50, 60]

// 5. Destructuring & Rest Operator
// Very useful for separating a "head" from the "tail" of a dataset
const coordinates = [10, 20, 30, 40];
const [x, y, ...restOfCoordinates] = coordinates;

console.log("X:", x); // 10
console.log("Y:", y); // 20
console.log("Others:", restOfCoordinates); // [30, 40]


