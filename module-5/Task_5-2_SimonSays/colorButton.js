"use strict";

import { TPoint } from "lib2d";
import { TSpriteButton } from "libSprite";
import { EOctave, ENoteName, Notes, TSoundWave } from "libSound";
import { checkButton } from "./sequence.js";
import { EGameStatusType } from "./SimonSays.mjs";

export class TColorButton extends TSpriteButton{
    #dst;
    #gameBoardCenter;
    #sound;
    constructor(aSpcvs, aSPI, aGameBoardCenter){
        super(aSpcvs, aSPI, aSPI.dst.x, aSPI.dst.y);
        this.#dst = aSPI.dst;
        this.#gameBoardCenter = aGameBoardCenter;
    }
    
    isMouseOver(aMousePos){
        const isOver = super.isMouseOver(aMousePos);
      if(isOver){
        const dx = this.#gameBoardCenter.x - aMousePos.x;
        const dy = this.#gameBoardCenter.y - aMousePos.y;
        let hyp = Math.pow(dx, 2) + Math.pow(dy, 2);
        hyp = Math.sqrt(hyp);
        let inside = hyp > this.#dst.r1 && hyp < this.#dst.r2;
        if(inside){
            return true;
        }else{
            return false;
        }
      }
    }
    onMouseDown(){
        this.index = 1;
        if(this.#sound){
            this.#sound.play();
        }
    }

    onMouseLeave(aEvent){
        super.onMouseLeave(aEvent);
        this.index = 0;
        if(this.#sound){
            this.#sound.stop();
        }
    }

    onMouseUp(){
        this.index = 0;
        if(this.#sound){
            this.#sound.stop();
        }
        if(EGameStatusType.state === EGameStatusType.Gamer){
            checkButton(this);
        }
    
    }

    createSound(aIndex){
        let note = ENoteName.C;
        switch(aIndex){
            case 1:
                note = ENoteName.F;
                break;
            case 2:
                note = ENoteName.D;
                break;
            case 3:
                note = ENoteName.E;
                break;
        }
        this.#sound = new TSoundWave(EOctave.Octave6, note);
    }
}