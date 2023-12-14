const today = new Date();
console.log(Date.now());

const birthDate = new Date("1999-01-27");
console.log(birthDate);

const marriageDate = new Date(2025, 0, 10);
console.log(marriageDate);

console.log(birthDate.getFullYear());
console.log(birthDate.toDateString());
const birthStr = birthDate.toString();
console.log(birthStr.slice(11, 20));
