function trackFitness(excercise, duration) {
  const request = new Promise((resolve, reject) => {
    if (duration > 0) {
      console.log(`You performed ${excercise} for ${duration} minutes`);
      setTimeout(() => {
        resolve(duration);
      }, 5000);
    } else {
      reject("Invalid Duration, Please provide a positive number");
    }
  });
  return request;
}

trackFitness("Running", 20)
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
