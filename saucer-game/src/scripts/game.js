import KeyManager from "./keyManager";
import Saucer from "./saucer";
import Starship from "./starship";
import Shoot from "./shoot";

export default class Game {

  #canvas;

  constructor(canvas) {
    this.#canvas = canvas;
    this.starship = new Starship(40, 196);
    this.score = 0;
    this.saucers = [];
    this.shoots = [];
    this.keyManager = new KeyManager();
  }

  animate() {
    const ctxt = this.#canvas.getContext("2d");
    ctxt.clearRect(0, 0, this.#canvas.width, this.#canvas.height);

    // Gérer les collisions des tirs avec les soucoupes
    this.shoots.forEach(shoot => {
      const collidedSaucer = shoot.checkCollisionWithSaucers(this.saucers);
      if (collidedSaucer) {
        this.score += 200;
        document.getElementById('score').textContent = this.score;
        collidedSaucer.deltaX = 0;
        collidedSaucer.deltaY = 3;
        this.shoots = this.shoots.filter(s => s !== shoot);
      }
    });

    this.saucers.forEach(saucer => {
      let collided = false;
      if (typeof saucer.checkCollisionWithStarship === "function") {
        collided = saucer.checkCollisionWithStarship(this.starship);
      } else if (typeof this.starship.checkCollisionWithSaucer === "function") {
        collided = this.starship.checkCollisionWithSaucer(saucer);
      } else {
        const sx = typeof saucer.x === "number" ? saucer.x : 0;
        const sy = typeof saucer.y === "number" ? saucer.y : 0;
        const bx = typeof this.starship.x === "number" ? this.starship.x : 0;
        const by = typeof this.starship.y === "number" ? this.starship.y : 0;
        const dx = sx - bx;
        const dy = sy - by;
        const distance = Math.hypot(dx, dy);
        const saucerRadius = saucer.radius ?? (saucer.width ? saucer.width / 2 : 20);
        const shipRadius = this.starship.radius ?? (this.starship.width ? this.starship.width / 2 : 20);
        collided = distance < (saucerRadius + shipRadius);
      }

      if (collided) {
        this.score -= 200;
        document.getElementById('score').textContent = this.score;
        saucer._remove = true;
      }
    });

    this.saucers = this.saucers.filter(s => !s._remove);

    // Déplacer et dessiner les tirs
    this.shoots = this.shoots.filter(shoot => shoot.x < this.#canvas.width);
    this.shoots.forEach(shoot => {
      shoot.move();
      shoot.draw(ctxt);
    });

    // Déplacer et dessiner les soucoupes
    this.saucers = this.saucers.filter(saucer => !this.saucersCollided(saucer));
    this.saucers.forEach(saucer => {
      saucer.move(this.#canvas);
      saucer.draw(ctxt);
    });

    // Déplacer et dessiner le vaisseau
    this.starship.handleMoveKeys(this.keyManager);
    this.starship.move(this.#canvas);
    this.starship.draw(ctxt);

    this.requeteAnimation = requestAnimationFrame(this.animate.bind(this));
  }

  saucersCollided(saucer) {
    return saucer.checkEndOfCanva();
  }

  startAndStop() {
    if (this.raf) {
      cancelAnimationFrame(this.raf);
      this.raf = null;
    } else {
      this.animate();
    }
  }

  keyDownActionHandler(event) {
    switch (event.key) {
      case "ArrowUp":
      case "Up":
        this.keyManager.upPressed();
        break;
      case "ArrowDown":
      case "Down":
        this.keyManager.downPressed();
        break;
      case " ":
        this.shoots.push(new Shoot(this.starship.x, this.starship.y));
        break;
      default: return;
    }
    event.preventDefault();
  }

  keyUpActionHandler(event) {
    switch (event.key) {
      case "ArrowUp":
      case "Up":
        this.keyManager.upReleased();
        break;
      case "ArrowDown":
      case "Down":
        this.keyManager.downReleased();
        break;
      default: return;
    }
    event.preventDefault();
  }

  get canvas() {
    return this.#canvas;
  }

  addSaucer() {
    const x = this.canvas.width;
    const y = Math.floor(Math.random() * (this.canvas.height));
    this.saucers.push(new Saucer(x, y));
  }
}



