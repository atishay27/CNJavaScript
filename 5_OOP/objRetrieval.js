function main() {
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    address: {
      city: "New York",
      street: "123 Main St",
      zipCode: "10001",
    },
  };
  const userProfile2 = {
    name: "Marry Jane",
    email: "marry.jane@example.com",
    address: {
      city: "L.A",
      street: "154, washington road",
      block: "0101",
      zipCode: "10011",
    },
  };

  function getUserDetail(profile, keys) {
    let current = { ...profile };
    for (let key of keys) {
      let keyFound = false;
      for (let prop in current) {
        if (prop === key) {
          keyFound = true;
          current = current[key];
          break;
        }
      }
      if (!keyFound) {
        return "Not available";
      }
    }

    // Return the final nested value
    return current;
  }

  console.log(getUserDetail(userProfile, ["address", "city"]));
  // Usage: should return "New York"
  //do not modify the return statement
  return getUserDetail;
}
main();
