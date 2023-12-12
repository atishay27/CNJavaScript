class Vehicle {
  //private properties
  #regNumber;
  //contructor (optional)
  constructor(name, color, wheels, number) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
    this.#regNumber = number;
  }
  //public methods
  getDetails() {
    console.log(
      `The ${this.name} is ${this.color} in color.\nIt has ${
        this.wheels
      } wheels.\nThe Registration Number is ${this.#getNumber()}`
    );
  }
  //private methods
  #getNumber() {
    return this.#regNumber;
  }
}

const veh1 = new Vehicle("Activa 3G", "Grey", 2);
veh1.name = "Activa 4G";
veh1.getDetails();
console.log(veh1);
// veh1.#regNumber = "KA01AB7879"; -- This will throw error
// console.log(veh1.#regNumber); -- Even You can't access it
