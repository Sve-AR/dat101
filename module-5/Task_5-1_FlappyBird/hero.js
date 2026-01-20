"use strict";
import { TSprite } from "libSprite";
import { EGameStatus } from "./FlappyBird.mjs";
import { TSineWave  } from "lib2d";

export class THero extends TSprite{
    #gravity;
    #speed;
    #wave;
    constructor(aSpcvs, aSPI){
        super(aSpcvs, aSPI, 100, 200);
        this.animationSpeed = 50;
        this.#gravity = 9.81 / 100;
        this.#speed = 0;
        this.#wave = new TSineWave(1, 1);
        this.y += this.#wave.value;
    }
    
    animate(){
      const hasGravity = 
      EGameStatus.state === EGameStatus.gaming ||
      EGameStatus.state === EGameStatus.heroIsDead

    if(hasGravity){
      if(this.y < 425 - this.height){
        this.#speed += this.#gravity;
        this.y += this.#speed;
        if(this.rotation < 90){
        this.rotation = this.#speed * 20;
        }
      }
      else{
        EGameStatus.state = EGameStatus.gameOver; //K!!! stops the game when collision happens
        this.animationSpeed = 0; //K!!! stops the hero from moving when dead
      }
    }else if(EGameStatus.state === EGameStatus.idle){
      this.y += this.#wave.value;
    }
  }

//flap mechanic

    flap(){
        this.#speed = - 3;
        this.rotation = 0;
    }
}
