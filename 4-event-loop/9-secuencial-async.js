// 9-async-sequential.js
// The "Holy Grail" of readability. Looks like Java/Python, acts like JS.

// Clean Async Helpers
async function getUser(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) throw new Error("User not found");
    return res.json();
}

async function getPosts(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return res.json();
}

async function fetchFullDashboard() {
  try {
    console.log("1. Getting User...");
    const user = await getUser(1); // Waits here
    
    console.log(`2. User ${user.name} found. Getting Posts...`);
    const posts = await getPosts(user.id); // Waits here
    
    console.log(`3. Found ${posts.length} posts. Done.`);
    
  } catch (error) {
    console.error("Process Failed:", error);
  }
}

fetchFullDashboard();