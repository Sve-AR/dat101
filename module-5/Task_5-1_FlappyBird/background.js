"use strict";
import{ TSprite } from "libSprite";

export class TBackground{
    #spriteBackground;
    #spritGround;
    constructor(aSpcvs, aSPI){
        this.#spriteBackground = new TSprite(aSpcvs, aSPI.background, 0, 0);
        this.#spritGround = new TSprite(aSpcvs, aSPI.ground, 0 , 425);
    }

    draw(){
        this.#spriteBackground.draw();
        this.#spritGround.draw();
    }
}
