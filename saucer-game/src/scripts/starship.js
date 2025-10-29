// la source de l'image à utiliser pour la balle
import starshipImgSrc from './assets/images/vaisseau-ballon-petit.png';

import Mobile from "./mobile";

/* TYPE Mobile */
export default class Starship extends Mobile {

  constructor(x = 40, y, deltaX = 0, deltaY = 8) {
    super(x, y, deltaX, deltaY);
    this.width = 48;
    this.height = 39;
    this.image = this.#createImage(starshipImgSrc);
  }

  #createImage(imageSource) {
    const newImg = new Image();
    newImg.src = imageSource;
    newImg.onload = () => {
      console.log('Image loaded:', imageSource);
    };
    newImg.onerror = () => {
      console.error('Failed to load image:', imageSource);
    };
    return newImg;
  }

  

  /**
   * 
   * @returns true if the starship is moving up
   */
  getUp(){
    return this.moving == 1;
  }

  /**
   * 
   * @returns true if the starship is moving down
   */
  getDown(){
    return this.moving == -1;
  }



  /**
   *  
   * @returns if the starship cannot go up 
   */
  moveUp(){
    this.deltaY = -8;
  }
  
  

  /**
   *  
   * @returns if the starship cannot go up 
   */
  moveDown(){
    this.deltaY = 8; 
  }


  

  move(box) {              // déplace sans sortir des limites de *box*
    this.x = Math.max(0, Math.min(box.width - this.width, this.x + this.deltaX));
    this.y = Math.max(0, Math.min(box.height - this.height, this.y + this.deltaY));
  }

  stopMoving() {
    this.deltaX = 0;
    this.deltaY = 0;
  }

  handleMoveKeys(keyManager) {
    this.stopMoving();    // on réinitialise les déplacements
    if (keyManager.up)    // touche flèche haut pressée ?
       this.moveUp();
    if (keyManager.down)  // touche flèche bas pressée ?
       this.moveDown();
  }


  collisionWith(obstacle) {
    const p1x = Math.max(this.x, obstacle.x);
    const p1y = Math.max(this.y, obstacle.y);
    const p2x = Math.min(this.x + Ball.BALL_WIDTH, obstacle.x + obstacle.width);
    const p2y = Math.min(this.y + Ball.BALL_WIDTH, obstacle.y + obstacle.height);

    return p1x < p2x && p1y < p2y;
  }

}
