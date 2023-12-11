/** For Loops **/

// for (Intialize; Condition; Operation){ //Loop Body }
let sum = 0;
for (let x = 0; x <= 10; x += 2) {
  sum += x;
}
// console.log(sum);

/** While Loops **/

//while(condition){}
let i = 12345;
while (i != 0) {
  console.log(i % 10);
  i = parseInt(i / 10);
}

/* 
When no of iteration is known: Use For Loop
When no of iterations are unknown: Use While Loop
Both For & While loop are Entry Controlled loop
*/

/** Do-While Loop **/

//do{}while(Condition);

do {
  num = parseInt(prompt("Enter Number"));
  console.log(num);
} while (num < 50);
