/*
P1 - CONSOLE PRINTING

console.log("Hello, World!");
console.log(1+1);
console.log(20*2);
console.log("Can we combine strings with numbers? " + 8);
console.log("Can we combine strings with strings? " + "Maybe?");
 */

/*
P2 - FORMATTING DOESN'T MATTER

console.log("This is line 1.");
console.log("This is line 2."); console.log("This is line 3.");
console.log("This is line 4.");;;
console.log("This is line 5.");

 */

/*
 P3 - COMMENTS

Sandra Svensson
1 October 2025
sandra.svensson@medieinstitutet.se
 */

/*
P4 - VARIABLES:

- const - can't be changed, constant

- let - you can change the value of it, block initialized.
Initialized inside a function means you can only access it in that function

- var - bad practise,because it takes up a lot of space, but it's global

// Automatic declaration - not good practise

a = 5;
b = 6;
c = a + b;

// You don't have to set a value to a variable immediately, there's no hurry

let stringExample;

stringExample = "This is a string";

// The actual exercise:

let numberOfBottles = 10;
const line1 = "green bottles hanging on the wall";
const line2 = "and if one green bottle, should accidentally fall, there'll be";

console.log(numberOfBottles);
console.log(line1);
console.log(numberOfBottles);
console.log(line1);
console.log(line2);
console.log(--numberOfBottles);
console.log(line1);
*/

/* P5 - OPERATORS

let kmPerHour = 72;
let kmphToMps = 0.277777778;
let mPerSecond = Math.round(kmPerHour * kmphToMps);
console.log(mPerSecond);

let minutes = 3;
let secondsPerMinute = 60;
let minToSec = minutes * secondsPerMinute;
console.log(minToSec);

// Using division and remainder
let x = 11;
let y = 4;

console.log(11/4);
console.log(11%4);

 */

// FUNCTIONS

// function that converts km/h to m/s
function speedConverter(kmph) {
  kmphToMps = 0.277777778;
  mPerSecond = Math.round(kmph * kmphToMps);
  return mPerSecond
}

// define a variable where we save the returned data from the function
let results;
// assign the returned data from the function to the variable
results = speedConverter(72);
// print results
console.log(results);

function timeConverter(minutes){
  let secondsPerMinute = 60;
  let minToSec = minutes * secondsPerMinute;
  console.log(`${minutes} minute(s) is: ${minToSec} seconds`);
}

timeConverter(3);

function quotientAndRemainder(x, y) {
  console.log(`The quotient of ${x} and ${y} is:`);
  console.log(x/y);
  console.log(`The remainder of ${x} and ${y} is:`);
  console.log(x%y);
}

quotientAndRemainder(11, 4);

function areaOfCircle(r) {
  const pi = 3.14159;
  console.log(`The area of a circle with radius ${r} is:`);
  console.log(pi*r**2);
}

areaOfCircle(2);

// I know this is cheating, but...
function negateNumber(x) {
  console.log(`The negation of ${x} is:`);
  console.log(`-` + x);
}
negateNumber(11);

function bmi(h, w) {
  console.log(w/(h*h));
}
bmi(1.82, 70);

function hypotenuse(x, y) {
  let z = Math.sqrt(x**2 + y**2);
  console.log(z);
}
hypotenuse(3, 4);

function secToMin(x) {
  let minutes = Math.floor(x/60);
  let seconds = x%60;
  console.log(`${minutes} minute(s) and: ${seconds} second(s)`);
}

secToMin(111);
