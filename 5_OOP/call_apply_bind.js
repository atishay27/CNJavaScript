const car = {
  name: "car",
  color: "black",
  getDetails(company, seat) {
    console.log(
      `This is a ${this.color} ${this.name} of ${company} company with ${seat} seats`
    );
  },
};

const bus = {
  name: "bus",
  color: "blue",
};
car.getDetails("Maruti", 5);
car.getDetails.call(bus, "Volvo", 50);
car.getDetails.apply(bus, ["Gold", 60]);
const bus2 = car.getDetails.bind(bus);
bus2("Silver", 55);
