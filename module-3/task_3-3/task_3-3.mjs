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
function TaxCalculation(aGrossAmount, aTaxGroup) {
  const taxGroup = aTaxGroup.toLowerCase();
  let taxRate = 0;
  switch (taxGroup) {
    case "normal":
      taxRate = 25;
      break;
    case "food":
      taxRate = 15;
      break;
    case "hotel":
    case "transport":
    case "cinema":
      taxRate = 10;
      break;
    default:
      printOut("Error: Unknown tax group!");
      return;
  }
  const netAmount = (100 * aGrossAmount) / (taxRate + 100);
  printOut(`Gross amount: ${aGrossAmount.toFixed(2)}`);
  printOut(`Tax group: ${aTaxGroup}, Tax rate: ${taxRate}%`);
  printOut(`Net amount: ${netAmount.toFixed(2)}`);
  printOut("");
}

TaxCalculation(100, "Normal");
TaxCalculation(100, "Food");
TaxCalculation(100, "Hotel");
TaxCalculation(100, "Transport");
TaxCalculation(100, "Cinema");
TaxCalculation(100, "Car");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function CalculateSpeedDistanceTime(aDistance, aTime, aSpeed) {
  if (aSpeed === null) {
    // Calculate speed
    if( !aTime || aTime === 0 || !aDistance ) {
      printOut("Error: Time or Distance cannot be zero or null when calculating speed!");
      return NaN;
    }
    aSpeed = aDistance / aTime;
    printOut(`Calculated Speed: ${aSpeed.toFixed(2)} units/time`);
    return aSpeed;
  } else if (aTime === null) {
    // Calculate time
    if( !aSpeed || aSpeed === 0 || !aDistance ) {
      printOut("Error: Speed or Distance cannot be zero or null when calculating time!");
      return NaN;
    }
    aTime = aDistance / aSpeed;
    printOut(`Calculated Time: ${aTime.toFixed(2)} time units`);
    return aTime;
  } else if (aDistance === null) {
    // Calculate distance
    if( !aSpeed || !aTime) {
      printOut("Error: Speed or Time cannot be null when calculating distance!");
      return NaN;
    }
    aDistance = aSpeed * aTime;
    printOut(`Calculated Distance: ${aDistance.toFixed(2)} units`);
    return aDistance;
  }
}
CalculateSpeedDistanceTime(100, 2, null); // Calculate speed
CalculateSpeedDistanceTime(100, null, 50); // Calculate time
CalculateSpeedDistanceTime(null, 2, 50); // Calculate distance
CalculateSpeedDistanceTime(null, null, 50); // Error case
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);
function AdjustString(aText, aMaxSize, aChar, aInsertAtEnd) {
  let adjustedText = aText;
  let length = aText.length;
  while (length < aMaxSize) {
    if (aInsertAtEnd) {
      adjustedText += aChar;
    } else {
      adjustedText = aChar + adjustedText;
    }
    length++;
  }
  printOut(`Adjusted String: "${adjustedText}"`);
  return adjustedText;
}
AdjustString("Hello", 30, "*", true); // Insert at end
AdjustString("World", 25, "#", false); // Insert at beginning
AdjustString("This is a right aligned text.", 50, "&nbsp;", false); // Right align with spaces
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);
function TestMath(aLines) {
  let currentNumber = 1;
  for (let line = 1; line <= aLines; line++) {
    let leftSum = 0;
    let rightSum = 0;
    // Calculate left side, one more number than right side
    for (let i = 0; i < line + 1; i++) {
      leftSum += currentNumber++;
    }
    // Calculate right side
    for (let i = 0; i < line; i++) {
      rightSum += currentNumber++;
    }
    if (leftSum !== rightSum) {
      printOut(`Test failed at line ${line}: Left sum (${leftSum}) != Right sum (${rightSum})`);
      return;
    }
  }
  printOut("Math = fun!");
}

TestMath(200);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let Part10IntermediateSteps = "";
let Part10Step = 0;
function Part10Factorial(aNumber) {
  if (aNumber <= 1) {
    return 1;
  } else {
    const result = aNumber * Part10Factorial(aNumber - 1);
    Part10Step++;
    Part10IntermediateSteps += `Step ${Part10Step}: ${aNumber} * Factorial(${aNumber - 1}) = ${result}<br>`;
    return result;
  }
}
const numberForFactorial = 5;
const factorialResult = Part10Factorial(numberForFactorial);
printOut(`Factorial of ${numberForFactorial} is ${factorialResult}`);
printOut("Intermediate Steps:<br>" + Part10IntermediateSteps);
printOut(newLine);
