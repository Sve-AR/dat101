"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut();
function Part1PrintDate() {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const norDate = today.toLocaleDateString('no-NB', options);
  printOut(norDate);
}
Part1PrintDate();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function TodaysDate() {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const norwegianDate = today.toLocaleDateString('no-NB', options);
  printOut(`<h5>Today's Date: ${norwegianDate}</h5>`);
  return today;
}

function DaysUntil(aTodayDate){
  const releaseDate = new Date('2026-05-14');
  const timeDiff = releaseDate - aTodayDate;
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  printOut(`<h3>Days until 2XKO release: ${daysDiff} days</h3>`);
}
const todayDate = TodaysDate();
DaysUntil(todayDate);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function circleMetrics(radius) {
    if (radius <= 0) {
        console.log("Radius must be greater than 0");
        return;
    }

    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;

    return {
        radius,
        diameter,
        circumference,
        area
    };
}

printOut(circleMetrics(5));
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function rectangleMetrics(cube) {
    if (cube.width <= 0 || cube.height <= 0 || cube.depth <= 0) {
        console.log("Width, height, and depth must be greater than 0");
        return;
    }

    const surfaceArea = 2 * (cube.width * cube.height + cube.width * cube.depth + cube.height * cube.depth);
    const volume = cube.width * cube.height * cube.depth;

    return {
        width: cube.width,
        height: cube.height,
        depth: cube.depth,
        surfaceArea,
        volume
    };
}

printOut(rectangleMetrics({ width: 13, height: 7, depth: 10 }));
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function convertTemperature(temp, type) {
    let c, f, k;

    if (type === "C") {
        c = temp;
        f = temp * 9 / 5 + 32;
        k = temp + 273.15;
    } else if (type === "F") {
        f = temp;
        c = (temp - 32) * 5 / 9;
        k = c + 273.15;
    } else if (type === "K") {
        k = temp;
        c = k - 273.15;
        f = (k - 273.15) * 9 / 5 + 32;
    }

    printOut(
`Input: ${temp}°${type}
Celsius: ${Math.round(c)}°C
Fahrenheit: ${Math.round(f)}°F
Kelvin: ${Math.round(k)}K`
    );
}
convertTemperature(25, "C");
convertTemperature(77, "F");
convertTemperature(298, "K");
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
