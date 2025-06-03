// Day 1: Variables, Data Types, and Operators

// 🔹 Variable Declarations
let name = "Saif";
const age = 23;
var isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is a Student:", isStudent);

// 🔹 Data Types
let number = 42;              
let string = "JavaScript";    
let boolean = true;           
let undefinedVar;            
let nullVar = null;           

console.log(typeof number);      
console.log(typeof string);      
console.log(typeof boolean);     
console.log(typeof undefinedVar);
console.log(typeof nullVar);    

// 🔹 Operators
let x = 10;
let y = 3;

console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Modulus:", x % y);

// 🔹 Comparison Operators
console.log("x == y:", x == y);       
console.log("x != y:", x != y);       
console.log("x > y:", x > y);         
console.log("x <= y:", x <= y);       

// 🔹 Logical Operators
let hasPassed = true;
let hasSubmitted = false;

console.log("AND (&&):", hasPassed && hasSubmitted); 
console.log("OR (||):", hasPassed || hasSubmitted);  
console.log("NOT (!):", !hasPassed);                 

// 🔹 String Operations
let greeting = "Hello";
let language = "JavaScript";
let fullGreeting = greeting + ", " + language + "!";

console.log(fullGreeting); 
