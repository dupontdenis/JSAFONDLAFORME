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

people.forEach((person) => {
  person.status = person.mark < 10 ? "AJ" : "ADM";
});

console.log(people);

