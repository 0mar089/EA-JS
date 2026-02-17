// 6-promises.js
// A Promise represents a value that may be available now, later, or never.

console.log("Start");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json()) // Transform stream to JSON se elimina las cabeceras y te quedas con el body (json)
  .then(data => {
      console.log("Data Received:", data.title);
  })
  .catch(error => console.error("Error:", error));

console.log("End");