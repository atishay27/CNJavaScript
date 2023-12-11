const contacts = [
  { name: "Alice", company: "ABC Inc." },
  { name: "Bob", company: "XYZ Corp." },
  { name: "Charlie", company: "ABC Inc." },
];

// console.log(Object.keys(contacts[0]));
function mapContactsToCompanies(contacts) {
  //Implement your function and return the object
  return contacts.reduce(function (obj, contact) {
    if (Object.keys(obj).includes(contact.company)) {
      obj[contact.company].push(contact.name);
    } else {
      obj[contact.company] = [contact.name];
    }
    return obj;
  }, {});
}

console.log(mapContactsToCompanies(contacts));
