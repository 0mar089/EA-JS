// 8-async-await.js
// Syntactic sugar over Promises. Code looks synchronous, but it's non-blocking.

console.log("Start");

async function fetchPostData() {
  try {
    // 'await' pauses this function, but NOT the main thread
    const response = await fetch("http://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log("Data Received:", data.title);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchPostData();

console.log("End (Main thread continues)");
