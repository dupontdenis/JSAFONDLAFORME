const me = {
  firstName: "John",
  lastName: "Doe",
  mark: 14,
  address: {
    street: "Champs Elysées",
    city: {
      country: "France",
      city: "Paris",
    },
  },
};

const myBrother = {
  firstName: "Bob", // Override the `firstName` property
  lastName: me.lastName,
  mark: me.mark,
  address: {
    street: me.address.street,
    city: {
      country: me.address.city.country,
      city: me.address.city.city,
    },
  },
};

const mysister = {
  ...me,
  firstName: "Alice",
};

function printProperties(obj, prefix = "") {
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      printProperties(obj[key], `${prefix}${key}.`);
    } else {
      console.log(`${prefix}${key}: ${obj[key]}`);
    }
  }
}

printProperties(me);
printProperties(myBrother);
printProperties(mysister);

// Change the country of `me`
me.address.city.country = "Spain";

console.log(me);
console.log(myBrother);
console.log(mysister);
