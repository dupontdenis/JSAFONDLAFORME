const address = {
  location: "IBISC",
  city: "Evry",
};

const person = {
  lastName: "Dupont",
  mark: Math.floor(Math.random() * 21),
  address, // simplified notation
};

// Destructuring example 1
const { lastName, mark } = person;
console.log(`Name: ${lastName}, Mark: ${mark}`);

// Destructuring example 2
const {
  address: { location, city },
} = person;
console.log(`Location: ${location}, City: ${city}`);

// Destructuring with rename
const { lastName: nom } = person;
console.log(`Nom: ${nom}`);

// Destructuring with default value
const { firstName = "John" } = person;
console.log(`First Name: ${firstName}`);

// Extracting keys and values
const keys = Object.keys(person);
const values = Object.values(person);

console.log(`Keys: ${keys}`); // Output: Keys: lastName,mark,firstName
console.log(`Values: ${values}`); // Output: Values: Dupont,15,Jean

// Extracting key-value pairs
const entries = Object.entries(person);
entries.forEach(([key, value]) => {
  console.log(`Key: ${key}, Value: ${value}`);
});

entries.forEach(([key, value]) => {
  console.log(
    `Key: ${key}, Value: ${
      typeof value === "object" ? JSON.stringify(value) : value
    }`
  );
});
