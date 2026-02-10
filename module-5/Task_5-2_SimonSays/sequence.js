"use strict";

import { EGameStatusType, spawnColorButton, gameOver, updateRound } from "./SimonSays.mjs";

let colorButton = null;
let sequence = [];
let round = 0;
let seqIndex = 0;

export function resetSequence(){
    sequence = [];   
    round = 0;
    seqIndex = 0;
}

export function addRandomButton(aColorButtons){
    const index = Math.floor(Math.random() * aColorButtons.length);
    colorButton = aColorButtons[index];
    sequence.push(colorButton);
    seqIndex = 0;
    colorButton = sequence[0];
    setTimeout(setButtonDown, 1000); //This is the wait time before sequence start
}

export function checkButton(aColorButton){
    if(aColorButton === colorButton){
        console.log("Yes");
        seqIndex++;
        if(seqIndex < sequence.length){
            colorButton = sequence[seqIndex];
            setTimeout(setButtonDown, 500);
        }else{
            round++;
            updateRound(round);
            spawnColorButton();
        }
    }else{
        gameOver();
    }
}

function setButtonDown(){
    colorButton.onMouseDown();
    setTimeout(setButtonUp, 350);
}

function setButtonUp(){
    colorButton.onMouseUp();
    seqIndex++;
    if(seqIndex < sequence.length){
        colorButton = sequence[seqIndex];
        setTimeout(setButtonDown(350));
    }else{
    EGameStatusType.state = EGameStatusType.Gamer;
    colorButton = sequence[0];
    }
}



