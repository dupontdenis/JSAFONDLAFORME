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

console.log(people);

const peopleWithLowMarks = [];
for (const person of people) {
  if (person.mark < 10) {
    peopleWithLowMarks.push(person);
  }
}

console.log(peopleWithLowMarks); // Output: [{ lastName: "Petit", mark: 8 }]

const peopleWithHighMarks = [];
for (const person of people) {
  if (person.mark > 15) {
    peopleWithHighMarks.push(person);
  }
}

console.log(peopleWithHighMarks); // Output: [{ lastName: "Martin", mark: 18 }]


// define a function that takes an array of people and a mark as arguments and returns an array of people with a mark greater than the given mark
const filterPeopleByMark = (people, mark) => {
  const peopleWithHighMarks = [];
  for (const person of people) {
    if (person.mark > mark) {
      peopleWithHighMarks.push(person);
    }
  }
  return peopleWithHighMarks;
};

console.log(filterPeopleByMark(people, 15)); // Output: [{ lastName: "Martin", mark: 18 }]

// define a function that takes an array of people and a name as arguments and returns an array of people with the given name
const findPersonByName = (people, name) => {
 const peopleWithGivenName = [];
  for (const person of people) {
    if (person.lastName === name) {
      peopleWithGivenName.push(person);
    }
  }
  return null;
};

console.log(findPersonByName(people, "Martin")); // Output: [{ lastName: "Martin", mark: 18 }, { lastName: "Martin", mark: 8 }]

// define a function that takes an array of people and a callback as arguments and returns an array of people that satisfy the callback
const filterPeople = (people, callback) => {
  const filteredPeople = [];
  for (const person of people) {
    if (callback(person)) {
      filteredPeople.push(person);
    }
  }
  return filteredPeople;
};

console.log(filterPeople(people, (person) => person.mark < 10)); // Output: [{ lastName: "Martin", mark: 8 }]
console.log(filterPeople(people, (person) => person.mark > 15)); // Output: [{ lastName: "Martin", mark: 18 }]
console.log(filterPeople(people, (person) => person.lastName === "Martin")); // Output: [{ lastName: "Martin", mark: 18 }, { lastName: "Martin", mark: 8 }]

const isMarkLessThan10 = (person) => person.mark < 10;

const deferredPeople = filterPeople(people, isMarkLessThan10); // Output: [{ lastName: "Martin", mark: 8 }]
console.log(deferredPeople);

// now use methods like filter, map, and reduce to achieve the same results
console.log(people.filter((person) => person.mark < 10)); // Output: [{ lastName: "Martin", mark: 8 }]
console.log(people.filter((person) => person.mark > 15)); // Output: [{ lastName: "Martin", mark: 18 }]
console.log(people.filter((person) => person.lastName === "Martin")); // Output: [{ lastName: "Martin", mark: 18 }, { lastName: "Martin", mark: 8 }]

// calculate the average mark of all people
const averageMark = people.reduce((average, person) => average + person.mark, 0) / people.length;
console.log(averageMark); // Output: 13.25

// group the people by their first letter of name
const peopleGroupedByFirstLetter = people.reduce((groupedPeople, person) => {
  const firstLetter = person.lastName[0];
  if (!groupedPeople[firstLetter]) {
    groupedPeople[firstLetter] = [];
  }
  groupedPeople[firstLetter].push(person);
  return groupedPeople;
}, {});