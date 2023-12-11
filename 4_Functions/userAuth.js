function main() {
  const userAuth = //Implement your IIFE here
    //It should return the registerUser function
    (function () {
      let registeredUser = [];
      let registerUser = function (username, password) {
        if (registeredUser.find((obj) => obj.username === username)) {
          return "The user is already registered";
        } else {
          registeredUser.push({ username, password });
          return "The user have been added to the registeredUser array";
        }
      };
      let checkCredentials = function (username, password) {
        if (
          registeredUser.find(
            (obj) => obj.username === username && obj.password === password
          )
        ) {
          return true;
        } else {
          return false;
        }
      };
      return { registerUser, checkCredentials };
    })();

  console.log(userAuth.registerUser("user1", "password123"));
  //Output: The user have been added to the registeredUser array
  console.log(userAuth.registerUser("user1", "password123"));
  console.log(userAuth.checkCredentials("user1", "password13"));
  //Output : The user is already registered
  return userAuth;
}
main();
