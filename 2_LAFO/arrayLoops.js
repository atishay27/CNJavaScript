const student = ["Atishay", "Harish", "Hemraj", "Varun", "Alexa"];

/* Loop Over Array */

//Method 1 - Basic For Loop
for (let x = 0; x < student.length; x++) {
  console.log(`Roll No ${x + 1}: ${student[x]}`);
}

//Method 2 - For In Loop -- index will be in string
for (let i in student) {
  console.log(`Roll No ${parseInt(i) + 1}: ${student[i]}`);
}

//Method 3 - For Of Loop -- index will be inaccesible
for (let s of student) {
  console.log(s);
}
