class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2;
  }
  set diameter(newDiameter) {
    if (newDiameter >= 0) {
      this.radius = newDiameter / 2;
    } else {
      console.log("Invalid Input");
    }
  }
  //   getDiameter() {
  //     return this.radius * 2;
  //   }
}

const circle = new Circle(4);
console.log(circle.radius);
console.log(circle.diameter);
circle.radius = 6;
console.log(circle.diameter);
circle.diameter = 20;
circle.diameter = -100;
console.log(circle.radius);
// console.log(circle.getDiameter());
