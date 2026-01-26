"use strict";
import { TSprite } from "libSprite";
import { EGameStatus, menu } from "./FlappyBird.mjs";
import { TSineWave  } from "lib2d";
import { TSoundFile } from "libSound";

const fnFood = "./Media/food.mp3";//K!!!
const fnHeroIsDead = "./Media/heroIsDead.mp3";//K!!!
const fnGameOver = "./Media/gameOver.mp3";//K!!!
export class THero extends TSprite{
    #gravity;
    #speed;
    #wave;
    #sfEat;//K!!!
    #sfHeroIsDead;
    #sfGameOver;
    constructor(aSpcvs, aSPI){
        super(aSpcvs, aSPI, 100, 200);
        this.animationSpeed = 50;
        this.#gravity = 9.81 / 100;
        this.#speed = 0;
        this.#wave = new TSineWave(1, 1);
        this.y += this.#wave.value;
        this.#sfEat = null; //K!!!
        this.#sfHeroIsDead = null; //K!!!
        this.#sfGameOver = null; //K!!!
    }
    
    eat(){ //K!!!
      if(this.#sfEat === null){
        this.#sfEat = new TSoundFile(fnFood);
      }else{
        this.#sfEat.stop();
      }
      this.#sfEat.play();
    }

    animate(){
      const hasGravity = 
      EGameStatus.state === EGameStatus.gaming || EGameStatus.state === EGameStatus.heroIsDead

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
        menu.stopSound();
        this.animationSpeed = 0; //K!!! stops the hero from moving when dead
        this.#sfGameOver = new TSoundFile(fnGameOver);
        this.#sfGameOver.play();
      }
    }else if(EGameStatus.state === EGameStatus.idle){
      this.y += this.#wave.value;
    }
  }

//flap mechanic

dead(){
  this.#sfHeroIsDead = new TSoundFile(fnHeroIsDead);
  this.#sfHeroIsDead.play();
}

    flap(){
        this.#speed = - 3;
        this.rotation = 0;
    }
}
