const people = [
  {
    lastName: "Dupont",
    mark: 15,
  },
  {
    lastName: "Martin",
    mark: 18,
  },
  {
    lastName: "Durand",
    mark: 12,
  },
  {
    lastName: "Martin",
    mark: 8,
  },
];

const updatedPeople = people.map((person) => {
  return {
    ...person,
    status: person.mark < 10 ? "AJ" : "ADM",
  };
});

console.log(updatedPeople);
// to simulate the map function in pythontutor!
// const updatedPeople = people.map((person) => {
//   return {
//     lastName: person.lastName, // ...person
//     mark: person.mark, // ...person
//     status: person.mark < 10 ? "AJ" : "ADM",
//   };
// });

// define a pers with last, mark, status, adress, city

const denis = {
  firstName: "Denis",
  lastName: "Dupont",
  mark: 15,
  status: "ADM",
  address: {
    location: "IBISC",
    city: "Evry",
  },
}

const denisBrother = {
  ...denis,
  lastName: "Dupond",
}

