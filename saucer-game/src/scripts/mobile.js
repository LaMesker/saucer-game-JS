
export default class Mobile{

    constructor(x, y, deltaX=0, deltaY=0){
        this.x = x;
        this.y = y;
        this.deltaX = deltaX;
        this.deltaY = deltaY;
    }

    draw(context) {
      if (this.image && this.image.complete) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
      } else if (this.image) {
        this.image.onload = () => {
          context.drawImage(this.image, this.x, this.y, this.width, this.height);
        };
      }
    }

    move(){
    this.x = this.x + this.deltaX;
    this.y = this.y + this.deltaY;
  }

  
}