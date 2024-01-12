const request = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("Promise Initiated");
    resolve("Promise Fulfilled");
    // reject("Request has been rejected");
  }, 2000);
});

request
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Request is Completed");
  });

console.log(request);
