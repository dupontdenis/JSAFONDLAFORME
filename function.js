const capitalizeFirstLetter = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

console.log(capitalizeFirstLetter("ibisc")); // Output : Ibisc

const capitalizeFirstLetterArrow = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

console.log(capitalizeFirstLetterArrow("ibisc")); // Output: Ibisc

// Syntax: Arrow functions have a shorter syntax.
const add = (a, b) => a + b;

// Implicit Return: If the function body contains only a single expression, you can omit the braces and the return keyword.
const square = (x) => x * x;

// this Binding: Arrow functions do not have their own this context. They inherit this from the enclosing scope.
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` refers to the Person instance
    console.log(this.age); // Output: 0
  }, 1000);
}

const p = new Person();

function Button() {
  this.clicked = false;
  const button = document.createElement('button');
  button.textContent = 'Click me';

  button.addEventListener('click', function() {
    this.clicked = true; // `this` refers to the button element
    console.log(this.clicked); // Output: undefined (button element does not have `clicked` property)
  });

  document.body.appendChild(button);
}

const btn = new Button();
