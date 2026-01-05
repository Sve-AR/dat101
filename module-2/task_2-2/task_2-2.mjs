"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const sum = 2 + (3 * (2 - 4) * 6);
printOut("The result is of 2 + (3 * (2 - 4) * 6) is " + sum);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const m = 25.34;
const answer = m * 39.37;
printOut("25 meters and 34 centimeters is equal to " + (answer).toFixed(2) + " inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const d = 3
const h = 12
const min = 14
const s = 45
const v = (d * 24 * 60) + (h * 60) + min + (s / 60);
printOut("It turns into " + v + " minutes");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const minutes = 6322.52;

const day = Math.floor(minutes / 1440)
const days = minutes % 1440;

const hour = Math.floor(days / 60)
const hours = hour % 60;

const mins = Math.floor(hours);

const sec = Math.floor((hours - mins) * 60);

printOut("There are " + day + " days, " + hour + " hours, " + mins + " minutes and " + sec + " seconds in 6322.52 minutes");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const nok = 9.90
const usd = 1
printOut("54 dollars is " + (nok * 54).toFixed(0) + " kr and 535 kr is " + ((usd * 54)).toFixed(0) + " bucks")
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text = "Det er mye mellom himmel og jord vi ikke forstår.";
console.log("Length of text:", text.length);
console.log("Character at index 19:", text.charAt(19));
console.log("Substring from position 35, 8 characters:", text.substring(35, 8));
console.log("Index of 'mellom':", text.indexOf("jord"));
printOut("The text is: " + text.length + " characters long,")
printOut("The character at index 19 is " + text.charAt(19))
printOut("And the substring from position 35 with length 8 is " + text.substring(35, 43))
printOut(" The word 'jord' starts at index " + text.indexOf("jord") + ".");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Is 5 greater than 3? " + (5 > 3));
printOut("Is 7 >= 7? " + (7 >= 7));
printOut('Is "a" greater than "b"? ' + ("a" > "b"));
printOut('Is "1" less than "a"? ' + ("1" < "a"));
printOut('Is "2500" less than "abcd"? ' + ("2500" < "abcd"));
printOut('"arne" is not equal to "thomas": ' + ("arne" !== "thomas"));
printOut("(2 equals 5) is this statement true? " + (2 === 5));
printOut('("abcd" > "bcd") is this statement false? ' + ("abcd" > "bcd"));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Convert '254' to number: " + Number("254"));
printOut("Convert '57.23' to number: " + Number("57.23"));
printOut("Convert '25 kroner' to number: " + parseInt("25 kroner"));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.floor(Math.random() * 360) + 1;
printOut("Random number (1–360): " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const dag = 131;
const uke = dag / 7;
const rest = dag % 7;
printOut("There are " + (uke).toFixed(0) + " weeks and " + rest + " in 131 days");
printOut(newLine);

