// Complete the function calculateAverage
const weather = [
  { city: "New York", temperature: 50, pressure: 1015 },
  { city: "Los Angeles", temperature: 70, pressure: 1010 },
  { city: "Chicago", temperature: 40, pressure: 1012 },
  { city: "Houston", temperature: 75, pressure: 1020 },
  { city: "Miami", temperature: 80, pressure: 1017 },
];
const pressureThreshold = 1015;
function calculateAverage(pressureThreshold) {
  let filteredWeather = weather.filter(
    (el) => el.pressure >= pressureThreshold
  );

  let tempArray = filteredWeather.map((el) => el.temperature);

  let total = tempArray.reduce((acc, cv) => {
    return acc + cv;
  }, 0);
  let avgTemp = total / tempArray.length;
  return avgTemp.toFixed(1);
  //Implement your function here
}
console.log(calculateAverage(pressureThreshold));
//Output : 68.3
