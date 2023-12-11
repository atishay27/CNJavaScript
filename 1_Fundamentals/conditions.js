let num = -10;
if (num > 0) {
  console.log("Positive Number");
} else if (num < 0) {
  console.log("Negative Number");
} else {
  console.log("Number is Zero");
}

//Email Validation
//Input an Email
//Length of the email > 11
//After . only 2 or 3 character allowed
//Minimum 3 characters between @ and .

// let email = prompt("Enter Your Email: ");
let email = "bhanujain850@gmail.com";
console.log(email);
let valid = false;

if (email.length > 11) {
  let afterDot = email.split(".")[1];
  let btwComDot = email.split("@")[1].split(".")[0];
  if (afterDot.length === 2 || afterDot.length === 3) {
    if (btwComDot.length >= 3) {
      valid = true;
    }
  }

  if (valid) {
    console.log("Valid Email");
  } else {
    console.log("Invalid Email");
  }
}
