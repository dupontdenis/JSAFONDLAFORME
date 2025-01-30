const firstName = "denis";

const greeting = `Hello, ${firstName}!`; // String interpolation
console.log(greeting); // Output: Hello, denis!

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

const greeting2 = `Hello, ${capitalizeFirstLetter(firstName)}!`; // String interpolation
console.log(greeting2); // Output: Hello, Denis!


