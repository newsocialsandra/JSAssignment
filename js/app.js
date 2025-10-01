// P1 - CONSOLE PRINTING

console.log("Hello, World!");
console.log("What a day huh?");
console.log(1+1);
console.log(20*2);
console.log("Can we combine strings with numbers? " + 8);
console.log("Can we combine strings with strings? " + "Maybe?");

// P2 - FORMATTING DOESN'T MATTER

console.log("This is line 1.");
console.log("This is line 2.");
console.log("This is line 3."); console.log("This is line 4.");
console.log("This is line 5.");;;
console.log("This is line 6.");

// P3 - COMMENTS

/*
Sandra Svensson
1 October 2025
sandra.svensson@medieinstitutet.se
 */

/*

P4 - VARIABLES:

const - can't be changed, constant

let - you can change the value of it, block initialized.
Initialized inside a function means you can only access it in that function

var - bad practise,because it takes up a lot of space, but it's global
*/

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

// P5 - OPERATORS

let kmPerHour = 72;
let kmphToMps = 0.277777778;
let mPerSecond = Math.round(kmPerHour * kmphToMps);
console.log(mPerSecond);

let minutes = 3;
let secondsPerMinute = 60;
let minToSec = minutes * secondsPerMinute;
console.log(minToSec);

let x = 11;
let y = 4;

console.log(11/4);

console.log(11%4);

