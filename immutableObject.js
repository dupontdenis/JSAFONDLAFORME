// Original items array
const items = [
  { id: "uuid_1", title: "Item 1" },
  { id: "uuid_2", title: "Item 2" },
  { id: "uuid_3", title: "Item 3" },
];

// Immutable Delete
const deleteId = "uuid_2";
const itemsAfterDelete = items.filter((item) => item.id !== deleteId);

// Immutable Modify
const modifyId = "uuid_3";
const itemsAfterModify = itemsAfterDelete.map((item) =>
  item.id === modifyId ? { ...item, title: "Modified Item 3" } : item
);

// Immutable Add
const newItem = { id: "uuid_4", title: "Item 4" };
const itemsAfterAdd = [...itemsAfterModify, newItem];

// Logging for demonstration
console.log(
  `Original items array remains unchanged: ${JSON.stringify(items, null, 2)}`
);
console.log(
  `Items after deletion: ${JSON.stringify(itemsAfterDelete, null, 2)}`
);
console.log(
  `Items after modification: ${JSON.stringify(itemsAfterModify, null, 2)}`
);
console.log(
  `Items after adding a new item: ${JSON.stringify(itemsAfterAdd, null, 2)}`
);
