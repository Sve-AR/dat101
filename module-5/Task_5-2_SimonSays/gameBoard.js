"use strict";

import { TSprite } from "libSprite";
import { TColorButton } from "./colorButton.js";

export class TGameBoard extends TSprite{
    #colorButtons
    constructor(aSpcvs, aSPI){
        super(aSpcvs, aSPI.Background, 0, 0);
        this.#colorButtons = [
            new TColorButton(aSpcvs, aSPI.ButtonRed)
        ];
    }

    draw(){
        super.draw();
        for(let i = 0; i < this.#colorButtons.length; i++){
            const colorButton = this.#colorButtons[i];
            colorButton.draw();
        }
    }
}