class Vehicle {
  static classDesc =
    "This is a Vehicle class which can be used to make vehicles";
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
  static showMsg() {
    console.log(Vehicle.classDesc);
  }
}

class Car extends Vehicle {
  classDesc = "This is a Car class which can be used to make vehicles";
  showMsg() {
    console.log("I am a static function of class car");
  }
}
const v1 = new Vehicle("Audi", "Black", 4);
console.log(v1);
// v1.showMsg(); -- This will throw error
Vehicle.showMsg(); // This will work

// console.log(v1.classDesc); This will give undefined since static property can only be accessed by class
console.log(Vehicle.classDesc); // This will work
console.log(Car.classDesc);
Car.showMsg();
