import Mobile from "./mobile";
import sauceImgSrc from "./assets/images/flyingSaucer-petit.png";

export default class Saucer extends Mobile {

  constructor(x, y, deltaX = -3, deltaY = 0) {
    super(x, y, deltaX, deltaY);
    this.width = 48;
    this.height = 39;
    this.image = this.#createImage(sauceImgSrc);
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
  
  checkEndOfCanva(){
    if (this.x < 0){
        return true;
    }
    return false;
  }

  move() {
    this.x += this.deltaX;
    this.y += this.deltaY;
  }
}