let car = {
  name: "Audi",
  year: 2012,
  getDetail(name, year) {
    console.log(`Your Car ${name} was manufactured in year ${year}`);
  },
  sub: [],
};

// let car2 = Object.create(car);
// let car3 = Object.create(car);
// car.name = "BMW";
// car3.name = "Audi";
// car3.sub.push("VOLVO");
// console.log(car.name);
// console.log(car2.name);
// console.log(car3.name);
// car2.sub.push("MARUTI");
// console.log(car.sub);

//Object Assign
let car2 = Object.assign({}, car);
car2.name = "BMW";
console.log(car);
