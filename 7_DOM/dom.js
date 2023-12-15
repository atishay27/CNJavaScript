//SelectAll using element tag - All gives an array of all the elements matching query
console.log(document.querySelectorAll("h1"));

//Select Using element tag - Gives the first match
console.log(document.querySelector("h1"));

//Select Using ClassName
console.log(document.querySelector(".second"));

//Select Using ID
console.log(document.querySelector("#para"));

//Exclusive for ID - using getElementByID - return single element
console.log(document.getElementById("para"));

//Exclusive for class - using getElementByClassName - returns collection
console.log(document.getElementsByClassName("second"));

//Exclusive for element tags - using getElementsByTagName - returns collection
console.log(document.getElementsByTagName("h3"));

const firstHeading = document.querySelector(".first");
firstHeading.style.color = "red";

const secondHeading = document.querySelector(".second");
secondHeading.style.backgroundColor = "grey";
