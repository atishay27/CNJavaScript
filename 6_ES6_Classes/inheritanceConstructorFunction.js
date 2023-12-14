function Vehicle(name, color, wheels) {
  this.name = name;
  this.color = color;
  this.wheels = wheels;
}

Vehicle.prototype.getVehDetails = function () {
  console.log(`
    Name:${this.name}
    Color:${this.color}
    Wheels:${this.wheels}
    `);
};

function Car(color, brand, seats) {
  Vehicle.call(this, "car", color, 4);
  this.brand = brand;
  this.seats = seats;
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.getDetails = function () {
  console.log(`
    Name:${this.name}
    Color:${this.color}
    Wheels:${this.wheels}
    Brand:${this.brand}
    Seats:${this.seats}
    `);
};

const c1 = new Car("Black", "Audi", 5);
c1.getDetails();
c1.getVehDetails();
