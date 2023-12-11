//Email Verification
//Input an email
//Length of the mail > 11
//after . only 2 or 3 char allowed
//minimum 3 characters between @ and .

function main(email) {
  let result;
  //write your program here to verify the email
  let len = email.length;
  let atIndex = email.indexOf("@");
  let dotIndex = email.lastIndexOf(".");
  let lastIndex = len - 1;
  let midLen = dotIndex - atIndex;
  let lastLen = lastIndex - dotIndex;
  let firstlen = atIndex;
  if (
    len >= 11 &&
    midLen >= 3 &&
    lastLen >= 2 &&
    lastLen >= 3 &&
    firstlen >= 3
  ) {
    result = `${email} is valid`;
  }
  //assign your final ans in result;
  result = `invalid email`;
  return result;
}

console.log(main("bhanujain850@gmail.com"));

function main(email) {
  let result;
  //write your program here to verify the email
  let emailLen = email.length;

  let atIndex = email.lastIndexOf("@");

  let dotIndex = email.lastIndexOf(".");

  let lastIndex = email.length - 1;

  if (
    emailLen > 11 &&
    lastIndex - dotIndex >= 2 &&
    lastIndex - dotIndex <= 3 &&
    dotIndex - atIndex >= 3 &&
    lastIndex - atIndex >= 3
  ) {
    result = email;
  } else {
    result = "invalid email";
  }
  //assign your final ans in result;
  return result;
}
