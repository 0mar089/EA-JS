
// 4-callbacks.js
// Simulating an async operation (like a Database query) using callbacks

console.log("Start");

function fetchUser(id, callback) {
  console.log(`...Fetching data for user ${id}...`);
  
  setTimeout(() => {
    // Data "received" after 2 seconds
    const user = { id: id, name: "Alice", age: 25 };
    callback(user);
  }, 2000);
}

// The function to run when data arrives
function displayUser(user) {
  console.log(`User Received: ${user.name}, Age: ${user.age}`);
}

fetchUser(1, displayUser);

console.log("End");