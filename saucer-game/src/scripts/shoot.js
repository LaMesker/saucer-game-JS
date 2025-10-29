import Mobile from "./mobile";
import shootImgSrc from "./assets/images/tir.png";

export default class Shoot extends Mobile {

  constructor(x, y) {
    super(x + 48, y + 15, 8, 0); // Positionner le tir juste à droite du vaisseau
    this.width = 32;
    this.height = 8;
    this.image = this.#createImage(shootImgSrc);
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

  collisionWith(obstacle) {
    const p1x = Math.max(this.x, obstacle.x);
    const p1y = Math.max(this.y, obstacle.y);
    const p2x = Math.min(this.x + this.width, obstacle.x + obstacle.width);
    const p2y = Math.min(this.y + this.height, obstacle.y + obstacle.height);

    return p1x < p2x && p1y < p2y;
  }

  checkCollisionWithSaucers(saucers) {
    return saucers.find(saucer => this.collisionWith(saucer) && saucer.deltaY === 0);
  }

  move() {
    this.x += this.deltaX;
    this.y += this.deltaY;
  }
}