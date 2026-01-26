"use strict";
import { TSprite } from "libSprite";
import{ hero, EGameStatus, menu } from "./FlappyBird.mjs"; // K!!! imports "hero" so it can be used in "obstacle" file and the status of the whole game

const EasyFlyerGap = 150;
const HardFlyerGap = 100;
const MinimumProtrusion = 30;


export class TObstacle{
  #spUp;
  #spDown;
  #spi;
  constructor(aSpcvs, aSPI){
    const x = 600;
    this.#spi = aSPI;
    // Generate random gap height, based on difficulty settings
    const gap = Math.ceil(Math.random() * (EasyFlyerGap - HardFlyerGap) + HardFlyerGap);
    const minTop = -this.#spi.height + MinimumProtrusion; // Minimum top position for upper obstacle
    const maxTop = -MinimumProtrusion; // Maximum top position for upper obstacle
    // Generate random top position for upper obstacle
    let top = Math.ceil(Math.random() * (maxTop - minTop) + minTop);
    const minBottom = 400 - MinimumProtrusion; // Minimum bottom position for lower obstacle
    let topWithGap = this.#spi.height + top + gap; // Initial position of bottom obstacle based on the height of the sprite, gap, and top 
    if(topWithGap > minBottom){
      // The top with gap is too low, adjust top and keep the gap constant
      const adjustment = topWithGap - minBottom;
      top -= adjustment;
      topWithGap = this.#spi.height + top + gap; // Recalculate topWithGap after adjustment
    }

    this.#spDown = new TSprite(aSpcvs, aSPI, x, topWithGap);
    this.#spDown.index = 2;
    this.#spUp = new TSprite(aSpcvs, aSPI, x, top);
    this.#spUp.index = 3;
  }

  // Properties
  get x(){
    return this.#spDown.x;
  }

  draw(){
    this.#spDown.draw();
    this.#spUp.draw();
  }

  
  animate(){
    this.#spDown.x--;
    this.#spUp.x--;
    let hasCollided = hero.hasCollided(this.#spDown) || hero.hasCollided(this.#spUp); //K!!! Checks if the hero has collided with a obstacle (|| = opt 7)

    if(hasCollided){
      console.log("Collision"); //K!!! tells if the collision is registered by the program
      EGameStatus.state = EGameStatus.heroIsDead; //K!!! Status has changed from playing to hero is dead
      hero.animationSpeed = 0; //K!!! Hero stops animation when dead
      menu.stopSound();
      hero.flap(); //K!!! Last flap of death
      hero.dead();
    }
  }

}// End of class TObstacle