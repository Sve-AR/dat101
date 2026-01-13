"use strict";
import { TSprite } from "libSprite";

export class THero extends TSprite{
    #gravity;
    #speed;
    constructor(aSpcvs, aSPI){
        super(aSpcvs, aSPI, 100, 200);
        this.animationSpeed = 25;
        this.#gravity = 9.81 / 100;
        this.#speed = 0;
    }
    animate(){
      if(this.y < 425 - this.height){
            this.#speed += this.#gravity;
        this.y += this.#speed;
        if(this.rotation < 90){
        this.rotation = this.#speed * 20;
        }
      }
    }//flap mechanic

    flap(){
        this.#speed = - 3;
        this.rotation = 0;
    }
}
