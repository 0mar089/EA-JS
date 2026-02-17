// 10-async-parallel.js
// PERFORMANCE TIP: Don't use 'await' sequentially if data is independent!

const simulateDelay = (ms, label) => 
    new Promise(resolve => setTimeout(() => resolve(label), ms));

async function getDataSequential() {
    console.time("Sequential");
    // ❌ Total time: 1s + 1s = 2s
    await simulateDelay(1000, "User Config");
    await simulateDelay(1000, "Friends List");
    console.timeEnd("Sequential");
}

async function getDataParallel() {
    console.time("Parallel");
    // ✅ Total time: max(1s, 1s) = 1s
    const configPromise = simulateDelay(1000, "User Config");
    const friendsPromise = simulateDelay(1000, "Friends List");

    // Wait for BOTH to finish
    const [config, friends] = await Promise.all([configPromise, friendsPromise]);
    console.timeEnd("Parallel");
    
    console.log(`Loaded: ${config} & ${friends}`);
}

console.log("--- Starting Tests ---");
// We run them one after another just for demo clarity
getDataSequential().then(() => getDataParallel());