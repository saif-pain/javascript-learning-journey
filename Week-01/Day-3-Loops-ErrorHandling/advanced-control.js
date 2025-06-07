// Day 3: Advanced Loops & Error Handling

console.log("✅ Day 3: Deeper into Loops and Error Handling");


console.log("\n🔸 Loop with break (stop when i == 3):");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Breaking at", i);
        break;
    }
    console.log("i =", i);
}


console.log("\n🔸 Loop with continue (skip even numbers):");
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        continue; 
    }
    console.log("Odd number:", i);
}


console.log("\n🔸 Nested Loops (Multiplication Table 1–3):");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} × ${j} = ${i * j}`);
    }
}


console.log("\n🔸 Custom Error Example:");
function withdrawMoney(balance, amount) {
    if (amount > balance) {
        throw new Error("Insufficient funds for this withdrawal.");
    }
    return balance - amount;
}

try {
    let remaining = withdrawMoney(1000, 1500); 
    console.log("Withdrawal successful. Remaining balance:", remaining);
} catch (err) {
    console.log("⚠️ Error:", err.message);
}


console.log("\n🔸 Input Validation Example:");

function divideNumbers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Invalid input: both a and b must be numbers.");
    }
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}

try {
    let result = divideNumbers(10, 0);
    console.log("Result:", result);
} catch (error) {
    console.log("⚠️ Caught:", error.message);
}
