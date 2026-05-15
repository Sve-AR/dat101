"use strict";

import { TSprite } from "libSprite";
import { EGameStatus, GameProps, SheetData } from "./game.mjs";

export class TMenu {
  #resumeButton;
  #canvas;

  constructor(spriteCanvas, canvas) {
    this.#canvas = canvas;

    this.#resumeButton = new TSprite( // Creates the resume button sprite
      spriteCanvas,
      SheetData.Resume,
      0,
      0
    );

    this.#resumeButton.visible = false;
    this.centerResumeButton(); // Will move the button to the center of the screen
    canvas.addEventListener("click", this.onClick.bind(this)); // Listen for mouse clicks on the canvas
  }

  centerResumeButton() {
    let canvasWidth = this.#canvas.width;
    let canvasHeight = this.#canvas.height;
    let buttonWidth = this.#resumeButton.spi.width; //Finds the sprite width and makes sure that the button is equally as wide
    let buttonHeight = this.#resumeButton.spi.height; //Finds the sprite height and makes sure that the button is equally as tall
    let centerX = canvasWidth / 2; //Finds the center of the canvas in the x-axis
    let centerY = canvasHeight / 2; // Finds the center of the canvas in the y-axis
    this.#resumeButton.x = centerX - buttonWidth / 2; //Makes sure that the buttons sprite is centered in the x-axis
    this.#resumeButton.y = centerY - buttonHeight / 2; //Makes sure that the buttons sprite is centered in the y-axis
  }
  showPause() {
    // Makes the button visible when the game is paused
    this.#resumeButton.visible = true;
  }
  hidePause() {
    // Hides the button when game resumes
    this.#resumeButton.visible = false;
  }
  onClick(event) {
    // Does not respond to the clicks when hidden
    if (!this.#resumeButton.visible) return;

    // Get mouse position on the screen
    const rect = this.#canvas.getBoundingClientRect(); // Finds the position of the mouse on the canvas
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Checks if mouse is inside the buttons/sprites edges
    const insideX =
      mouseX >= this.#resumeButton.x && //Checks if the mouse is inside the button's left x-axis
      mouseX <= this.#resumeButton.x + this.#resumeButton.spi.width; //Checks if the mouse is inside the button's right x-axis

    const insideY =
      mouseY >= this.#resumeButton.y && //Checks if the mouse is inside the button's top y-axis
      mouseY <= this.#resumeButton.y + this.#resumeButton.spi.height; //Checks if the mouse is inside the button's bottom y-axis

    if (insideX && insideY) {
      console.log("Resume Clicked");

      // Resume the game
      GameProps.gameStatus = EGameStatus.Playing;

      // Hide the button again
      this.hidePause();
    }
  }
  draw() {
    if (this.#resumeButton.visible) {
      this.#resumeButton.draw(); // Draw the resume button if it's visible
    }
  }
}

