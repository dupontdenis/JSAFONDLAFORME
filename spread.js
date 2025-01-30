const address = {
  street: "route de Paris",
  city: "Evry",
};

const dupont = {
  lastName: "Dupont",
  mark: Math.floor(Math.random() * 21),
  address, // Using simplified notation to include the address object
};

const dupond = {
  ...dupont, // Spread the properties of the `dupont` object into the new object
  lastName: "Dupond", // Override the `lastName` property
};

console.log(dupond); // Output: {  lastName: "Dupond", mark: <random number>, address: { street: "route de Paris", city: "Evry" } }

const { lastName, ...rest } = dupond; // Destructure the `lastName` property and spread the rest of the properties into the `rest` object

console.log(`Last Name: ${lastName}`); // Output: Last Name: Dupond


// Clone dupont and change the city property in the address object
const dupondParis = {
  ...dupont, // Spread the properties of the `dupont` object into the new object
  lastName: "Dupond", // Override the `lastName` property
  address: {
    ...dupont.address, // Spread the properties of the `address` object into the new address object
    city: "Paris", // Override the `city` property
  },
}
console.log(dupondParis); // Output: { lastName: "Dupond", mark: <random number>, address: { street: "route de Paris", city: "Paris" } }