// 'let' allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.
let greeting = "Hello, world!";
console.log(greeting); // Output: Hello, world!

// 'let' allows you to reassign the variable value.
greeting = "Hi, everyone!";
console.log(greeting); // Output: Hi, everyone!

// Example demonstrating block scope
if (true) {
    let blockScopedGreeting = "Hello from inside the block!";
    console.log(blockScopedGreeting); // Output: Hello from inside the block!
}
// console.log(blockScopedGreeting); // Uncaught ReferenceError: blockScopedGreeting is not defined