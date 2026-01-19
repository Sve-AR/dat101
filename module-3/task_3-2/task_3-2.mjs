"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let textPart1Line1 = "";
let textPart1Line2 = "";
for (let i = 1, j = 10; i <= 10; i++, j--) {
  textPart1Line1 += " " + i;
  textPart1Line2 += " " + j;
}
printOut(textPart1Line1);
printOut(textPart1Line2);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

const Numberguesser = 40;
let part1Random = Math.floor(Math.random() * 60) + 1;
while (part1Random !== Numberguesser) {
  part1Random = Math.floor(Math.random() * 60) + 1;
}
printOut("Yes! you guessed correct: " + part1Random);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const Numberguesser2 = 5743;
let guesses = 0;
let part3Random = 0;

const TimeGuess = Date.now(); //starter å "record" her

while (part3Random !== Numberguesser2) {
    part3Random = Math.floor(Math.random() * 1000000) + 1;
    guesses++;
}
let endGuess = Date.now(); //slutter "record" her
let taken = endGuess - TimeGuess;

printOut("Guesses " + guesses);
printOut("Tid " + taken + "ms");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

for (let number = 2; number < 200; number++) {
  let isPrime = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) { //If remainder is 0, the number divides evenly, means number is not prime
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    printOut(number);
  }
}

//printOut(isPrime); // Print all prime numbers found
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

for (let r = 1; r <= 7; r++) {
  let rowOutput = "";

  for (let k = 1; k <= 9; k++) {
    rowOutput += "K" + k + "R" + r + " ";
  }

  printOut(rowOutput.trim());
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
function printGrade(score) {
  let percent = (score / 236) * 100;
  let letter;

  if (percent >= 89) letter = "A";
  else if (percent >= 77) letter = "B";
  else if (percent >= 65) letter = "C";
  else if (percent >= 53) letter = "D";
  else if (percent >= 41) letter = "E";
  else letter = "F";

  printOut("Score: " + score + " (" + percent.toFixed(2) + "%) → Grade: " + letter);
  return letter;
}

// Generate 5 student scores
let g1 = Math.floor(Math.random() * 236) + 1;
let g2 = Math.floor(Math.random() * 236) + 1;
let g3 = Math.floor(Math.random() * 236) + 1;
let g4 = Math.floor(Math.random() * 236) + 1;
let g5 = Math.floor(Math.random() * 236) + 1;

printOut("=== Student Grades ===");
let l1 = printGrade(g1);
let l2 = printGrade(g2);
let l3 = printGrade(g3);
let l4 = printGrade(g4);
let l5 = printGrade(g5);

function gradeValue(letter) {
  if (letter === "A") return 6;
  if (letter === "B") return 5;
  if (letter === "C") return 4;
  if (letter === "D") return 3;
  if (letter === "E") return 2;
  return 1; // F
}

printOut("=== Sorted Grades (Highest to Lowest) ===");

let count = 0;

do {
  let highest = 0;
  let highestIndex = 0;

  // for loop checks each grade
  if (gradeValue(l1) > highest) { highest = gradeValue(l1); highestIndex = 1; }
  if (gradeValue(l2) > highest) { highest = gradeValue(l2); highestIndex = 2; }
  if (gradeValue(l3) > highest) { highest = gradeValue(l3); highestIndex = 3; }
  if (gradeValue(l4) > highest) { highest = gradeValue(l4); highestIndex = 4; }
  if (gradeValue(l5) > highest) { highest = gradeValue(l5); highestIndex = 5; }

  // Print and mark as used
  if (highestIndex === 1) { printOut(l1); l1 = "X"; }
  if (highestIndex === 2) { printOut(l2); l2 = "X"; }
  if (highestIndex === 3) { printOut(l3); l3 = "X"; }
  if (highestIndex === 4) { printOut(l4); l4 = "X"; }
  if (highestIndex === 5) { printOut(l5); l5 = "X"; }

  count++;

} while (count < 5);



printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function rollDice() {
  return [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1
  ];
}

function countFaces(dice) {
  let counts = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < 6; i++) {
    counts[dice[i] - 1]++;
  }

  return counts;
}

let throws = 0;
let found = false;

do {
  throws++;
  let dice = rollDice();
  let counts = countFaces(dice);

  found = true;
  for (let i = 0; i < 6; i++) {
    if (counts[i] !== 1) {
      found = false;
      break;
    }
  }
} while (!found);

printOut("Full Straight (1–6): " + throws + " throws");

throws = 0;
found = false;

do {
  throws++;
  let dice = rollDice();
  let counts = countFaces(dice);
  let pairs = 0;

  for (let i = 0; i < 6; i++) {
    if (counts[i] === 2) pairs++;
  }

  if (pairs === 3) found = true;

} while (!found);

printOut("Three Pairs: " + throws + " throws");

throws = 0;
found = false;

throws = 0;
found = false;

throws = 0;
found = false;

do {
  throws++;
  let dice = rollDice();
  let counts = countFaces(dice);
  let hasTwo = false;
  let hasFour = false;

  for (let i = 0; i < 6; i++) {
    if (counts[i] === 2) hasTwo = true;
    if (counts[i] === 4) hasFour = true;
  }

  if (hasTwo && hasFour) found = true;

} while (!found);

printOut("Tower (2 + 4 of a kind): " + throws + " throws");


do {
  throws++;
  let dice = rollDice();
  let counts = countFaces(dice);

  for (let i = 0; i < 6; i++) {
    if (counts[i] === 6) {
      found = true;
      break;
    }
  }
} while (!found);

printOut("Yahtzee (all the same): " + throws + " throws");



printOut(newLine);
