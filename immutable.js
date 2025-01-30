// Immutability doesn't necessarily mean duplicating all objects.
// It means creating new objects only when changes are made, leaving the original objects unchanged.
// This ensures that the state remains predictable and traceable.

const people = [
  {
    firstName: "John",
    lastName: "Doe",
    mark: 14,
    address: {
      street: "Champs Elysées",
      city: "Paris",
    },
  },
  {
    firstName: "Alice",
    lastName: "Martin",
    mark: 18,
    address: {
      street: "Rue de Rivoli",
      city: "Paris",
    },
  },
];

// In the example provided, the map function creates a new array,
// and only the objects that need to be updated are copied and modified.
// The other objects remain the same, preserving their references.
const updatedPeople = people.map(
  (person) =>
    person.firstName === "John"
      ? { ...person, mark: 16 } // Create a new object with the updated mark
      : person // Keep the original reference if no changes are made
);

console.log(updatedPeople);
// Output:
// [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     mark: 16,
//     address: {
//       street: "Champs Elysées",
//       city: "Paris",
//     },
//   },
//   {
//     firstName: "Alice",
//     lastName: "Martin",
//     mark: 18,
//     address: {
//       street: "Rue de Rivoli",
//       city: "Paris",
//     },
//   },
// ]

// Example: Update Alice's city immutably
const updatedPeopleWithNewCity = people.map((person) =>
  person.firstName === "Alice"
    ? {
        ...person,
        address: {
          ...person.address,
          city: "Lyon",
        },
      }
    : person
);

console.log(updatedPeopleWithNewCity);
// Output:
// [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     mark: 14,
//     address: {
//       street: "Champs Elysées",
//       city: "Paris",
//     },
//   },
//   {
//     firstName: "Alice",
//     lastName: "Martin",
//     mark: 18,
//     address: {
//       street: "Rue de Rivoli",
//       city: "Lyon",
//     },
//   },
// ]
