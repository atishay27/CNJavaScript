console.log("********* OBJECTS *********");

const student = {
  rollNumber: 1,
  studentName: "Atishay",
  class: 10,
  show: function () {
    console.log(`Hi my name is ${this.studentName} and my roll number is ${this.rollNumber},
    \nI am a student of class ${this.class}`);
  },
};

student.show();
