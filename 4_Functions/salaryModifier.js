//complete the increaseSalaries function
const employees = [
  { id: 1, name: "Alice", department: "sales", salary: 40000 },
  { id: 2, name: "Bob", department: "engineering", salary: 50000 },
  { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
  { id: 4, name: "David", department: "sales", salary: 35000 },
  { id: 5, name: "Emily", department: "engineering", salary: 55000 },
];
function increaseSalaries(employees) {
  employees.map(function (obj) {
    let newSal = obj.salary;
    if (obj.department === "sales") {
      newSal = (newSal * 1.1).toFixed(1);
    } else if (obj.department === "engineering") {
      newSal = (newSal * 1.15).toFixed(1);
    } else {
      newSal = (newSal * 1.05).toFixed(0);
    }
    obj.salary = newSal;
    return obj;
  });
  return employees;
}

console.log(increaseSalaries(employees));
