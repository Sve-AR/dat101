"use strict";

import { TSprite } from "libSprite";
import { EGameStatus } from "./FlappyBird.mjs";

export class TBait extends TSprite{
    #speed;
    constructor(aSpcvs, aSPI){
        super(aSpcvs, aSPI, 200, 100);
        this.animationSpeed = 20;
        this.#speed = 0.3; //K!!! Slow enough so the hero can catch it
    }

    animate(){
        if(EGameStatus.state === EGameStatus.gaming){ //K!!! Keeps the butterfly flying straight
        this.x -= this.#speed;
        }else{
        this.x += this.#speed;
        }
    }
};