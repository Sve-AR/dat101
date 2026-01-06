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
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
