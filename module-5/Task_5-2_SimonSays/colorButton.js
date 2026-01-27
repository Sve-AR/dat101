"use strict";

import { TSpriteButton } from "libSprite";

export class TColorButton extends TSpriteButton{
    constructor(aSpcvs, aSPI){
        super(aSpcvs, aSPI.dst.x, aSPI.dst.y);
    }
} 