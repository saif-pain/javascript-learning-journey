// Day 2: Control Structures (if, switch, loops, error handling)

console.log("✅ Day 2: Starting Control Structures Practice");

// 🔹 if...else Statement
let score = 85;

console.log("\n🔸 if...else Statement:");
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C or below");
}

// 🔹 switch Statement
let day = "Friday";

console.log("\n🔸 switch Statement:");
switch (day) {
    case "Monday":
        console.log("Start of the work week");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    default:
        console.log("Just another day");
}

// 🔹 for Loop
console.log("\n🔸 for Loop:");
console.log("Numbers from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 🔹 while Loop
let counter = 3;

console.log("\n🔸 while Loop:");
console.log("Countdown:");
while (counter > 0) {
    console.log(counter);
    counter--;
}

// 🔹 do...while Loop
let num = 0;

console.log("\n🔸 do...while Loop:");
do {
    console.log("This runs at least once. Number:", num);
    num++;
} while (num < 1);

// 🔹 Error Handling with try...catch
console.log("\n🔸 try...catch Error Handling:");
try {
    let result = 10 / 0;
    console.log("Result:", result);

    let user = null;
    console.log(user.name); // Will throw error
} catch (error) {
    console.log("⚠️ Caught an error:", error.message);
} finally {
    console.log("✅ Finished error handling block.");
}
console.log("✅ Day 2: Control Structures Practice Completed");