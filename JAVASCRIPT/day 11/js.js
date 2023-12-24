
/* TASK 1 */

const age = 28;
const isStudent = true;
const favoriteColors = ['green', 'yellow', 'white'];

/* TASK 2 */

let proud = "I'm proud of him";

/* TASK 3 */

const myName = "Asmaa";
const studentStatus = "I'm a student.";
const sentence = `My name is ${myName}, I am ${age} years old, and ${studentStatus}`;
console.log(sentence);

/* TASK 5 */

const myFavoriteAnimal = "horse";
const myFavoriteColor = "red";
const userFavoriteAnimal = prompt("What is your favorite animal?");
const userFavoriteColor = prompt("What is your favorite color?");
if (userFavoriteAnimal === myFavoriteAnimal && userFavoriteColor === myFavoriteColor) {
  console.log("We have the same favorite animal and color!");
} else if (userFavoriteAnimal === myFavoriteAnimal) {
  console.log("We share the same favorite animal!");
} else if (userFavoriteColor === myFavoriteColor) {
  console.log("We share the same favorite color!");
} else {
  console.log("We don't have the same favorite animal or color.");
}

/* TASK 6 */

const number = prompt("Enter a number:");
if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

/* TASK 8 */

const value = prompt("Enter a value:");
if (value) {
  console.log("True.");
} else {
  console.log("False.");
}
