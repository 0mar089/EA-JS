// 7-promise-chaining.js
// Solving Callback Hell with a flat chain

// Helpers returning Promises
const getUser = (id) => fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(r => r.json());
const getPosts = (userId) => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(r => r.json());
const getComments = (postId) => fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then(r => r.json());

console.log("Start Sequence");

getUser(1)
  .then(user => {
      console.log(`1. User Found: ${user.name}`);
      return getPosts(user.id); // Return promise for the next .then()
  })
  .then(posts => {
      console.log(`2. First Post ID: ${posts[0].id}`);
      return getComments(posts[0].id);
  })
  .then(comments => {
      console.log(`3. First Comment: "${comments[0].body.substring(0, 20)}..."`);
      console.log("End Sequence");
  })
  .catch(error => console.error("CRITICAL ERROR:", error));