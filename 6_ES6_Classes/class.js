/* Class in JS */
console.log("Class in JS");
console.log("*********************");
/* Pillars of OOPS - Inheritance, Polymorphism, Classes & Instances, 
Encapsulation & Abstractions */

//Class Expression
const Car = class {
  name;
  constructor(name) {
    this.name = name;
  }
};
const mycar = new Car("Maruti");
console.log(mycar);

// Class Declaration
class Vehicle {
  //properties
  name;
  color;
  wheels;
  //contructor (optional)
  constructor(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
  }
  //methods
  getDetails() {
    console.log(
      `The ${this.name} is ${this.color} in color.\nIt has ${this.wheels} wheels`
    );
  }
}

const myHondaCity = new Vehicle("Honda City", "Black", 4);
myHondaCity.getDetails();
console.log(myHondaCity);
console.log(myHondaCity.__proto__);
