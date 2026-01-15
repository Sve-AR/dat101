"use strict";
import{ TSprite } from "libSprite";

export class TBackground{
    #spriteBackground;
    #spritGround;
    constructor(aSpcvs, aSPI){
        this.#spriteBackground = new TSprite(aSpcvs, aSPI.background, 0, 0);
        this.#spritGround = new TSprite(aSpcvs, aSPI.ground, 0 , 425);
    }

    drawBackground(){
        this.#spriteBackground.draw();
    }

    drawGround(){
        this.#spritGround.draw();
    }

    animate(){
        const x = this.#spritGround.x + (this.#spritGround.width / 2);
        if(x < 5){
            this.#spritGround.x = 0;
        }else{
            this.#spritGround.x--;
        }
    }
}
