/* Inheritance*/
console.log("Inheritance");
console.log("*********************");

class Vehicle {
  constructor(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
  }
  getDetails() {
    console.log(
      `The ${this.name} is ${this.color} in color.\nIt has ${this.wheels} wheels`
    );
  }
}

class Car extends Vehicle {
  constructor(color, brand, type) {
    super("Car", color, 4); // Will call parent constructor
    this.brand = brand;
    this.type = type;
  }
  getDetails() {
    console.log(
      `The ${this.name} is ${this.color} in color.\nIt has ${this.wheels} wheels.\nIt is of ${this.brand} brand used for ${this.type} travelling`
    );
  }
}

const mycar = new Car("Black", "BMW", "Luxury");
console.log(mycar);
mycar.getDetails();
console.log(mycar.__proto__);
