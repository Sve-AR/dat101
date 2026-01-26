"use strict";

import { TSprite, TSpriteButton, TSpriteNumber } from "libSprite"; //K!!! add TSpriteNumber
import { startGame } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound"; //K!!!
import { TBait } from "./bait.js";

const fnCountDown = "./Media/countDown.mp3"//K!!!
const fnRunning = "./Media/running.mp3"//K!!! 

export class TMenu{
    #spTitle;
    #spPlayBtn;
    #spCountDown;//K!!!
    #sfCountDown;//K!!!
    #sfRunning;//K!!!
    constructor(aSpcvs, aSPI){
        this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
        this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 180);
        this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 190); //K!!!
        this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
        this.#spCountDown.visible = false;//K!!!
        this.#sfCountDown = null;//K!!!
        this.#sfRunning = null;//K!!!
    }
    
    stopSound(){
        this.#sfRunning.stop();
    }

    draw(){
        this.#spTitle.draw();
        this.#spPlayBtn.draw();
        this.#spCountDown.draw(); //K!!!
    }

    countDown(){ //K!!!
       this.#spCountDown.value--;
       if(this.#spCountDown.value > 0){
        setTimeout(this.countDown.bind(this), 1000);
       }else{
        this.#spCountDown.visible = false;
        this.#spTitle.hidden = true;
        this.#sfRunning = new TSoundFile(fnRunning);
        this.#sfRunning.play();
        startGame();
       }
    }

    spPlayBtnClick(){
        console.log("Click");
        this.#spPlayBtn.hidden = true;
        this.#spCountDown.visible = true; //K!!!
        this.#spCountDown.value = 4; //K!!!
        this.#sfCountDown = new TSoundFile(fnCountDown);//K!!!
        this.#sfCountDown.play();//K!!!
        this.#spCountDown.hidden = true;//K!!!
        this.countDown();//K!!!
    }
}