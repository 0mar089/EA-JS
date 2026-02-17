// 3-microtask.js
// Priority: Call Stack > MicroTask Queue (Promises) > MacroTask Queue (setTimeout)

// 1. Direct Synchronous Call
function logSync() {
    console.log("1. Sync Function (Stack)");
}

// 2. MacroTask (Low Priority)
function scheduleMacroTask() {
    setTimeout(() => {
        console.log("2. MacroTask (setTimeout)");
    }, 0);
}

// 3. MicroTask (High Priority)
function scheduleMicroTask() {
    Promise.resolve().then(() => {
        console.log("3. MicroTask (Promise)");
    });
}

// 4. Another Sync Call
const logEnd = () => {
    console.log("1b. End of Main Script");
}

// Execution
logSync();
scheduleMacroTask();
scheduleMicroTask();
logEnd();

