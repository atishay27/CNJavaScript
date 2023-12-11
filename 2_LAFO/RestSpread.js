const aprilBatch = ["Tina", "Madhur"];
const mayBatch = ["Ritik", "Deepak", "Shalini"];
const juneBatch = ["Saba", "Shivani"];
const julyBatch = [];

function enrollStudent(batch, studentName) {
  batch.push(studentName);
}

//Using Rest Operator
function enrollStudents(batch, ...students) {
  for (student of students) {
    batch.push(student);
  }
}

enrollStudent(julyBatch, "Atishay");
console.log(julyBatch);
enrollStudents(julyBatch, "Bhanu", "Varun", "Divas");
console.log(julyBatch);

/*If we assign one array to other and modify the original array, 
    the same changes will be reflected on duplicate array */

const newBatch = mayBatch;
mayBatch.pop();
console.log(newBatch);

//Using Spread Operator -- Helps in shallow copying

//Use 1 - Expand/Copying
const newBatch2 = [...mayBatch];
mayBatch.push("Atishay");
console.log(newBatch2);

//Use 2 - Concatenation
const mayJuneBatch = [...mayBatch, ...juneBatch];
console.log(mayJuneBatch);
