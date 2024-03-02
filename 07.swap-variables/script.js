// Swap variables
let a = 20;
let b = 1;

// 1st with another variable
let temporary = b;
b = a;
a = temporary;

// 2nd yeh sab language me support krta hai
a = a + b;
b = a - b;
a = a - b;

// 3rd short way but only javascript support krti hai
[b, a] = [a, b];

console.log(`a = ${a}   b = ${b}`);