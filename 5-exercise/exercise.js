
// Objective: Practice array manipulation using functional patterns (filter, map, reduce, and destructuring) by processing real data from an API.
// Filter: Only include users whose id is an even number.
// Transform: Create a new array of objects containing only the id, name, and the city (extracted from the nested address object).
// Add: Insert a "Guest User" at the beginning of the list without mutating the original result.
// Statistics: Calculate the total number of characters in all usernames combined using reduce.

fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(users => {
      // YOUR CODE STARTS HERE
      console.log("--- Processed Users ---");
      // 1. Filter even IDs
      // 2. Map to clean objects {id, name, city}
      // 3. Add Guest User at the start using Spread (...)
      
      console.log("--- Statistics ---");
      // 4. Reduce to count total characters in names
  });