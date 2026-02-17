// 5-callback-hell.js
// The problem: Nested dependencies create "Spaghetti Code"

console.log("Start");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("- User fetched");
    callback({ id: id, name: "Alice" });
  }, 1000);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    console.log("- Orders fetched");
    callback([{ orderId: 1, total: 50 }, { orderId: 2, total: 100 }]);
  }, 1000);
}

function getOrderDetails(orderId, callback) {
  setTimeout(() => {
    console.log("- Order Details fetched");
    callback({ orderId, product: "Laptop", price: 1000 });
  }, 1000);
}

// ❌ Callback Hell (Pyramid of Doom)
getUser(1, (user) => {
  getOrders(user.id, (orders) => {
    getOrderDetails(orders[0].orderId, (details) => {
      
      console.log(">>> Final Result:", details);
      console.log("End of Process");
      
    });
  });
});