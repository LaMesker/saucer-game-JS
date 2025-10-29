
// importation de la classe Game.js
import Game from './game.js';




// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler Greedy
const init = () => {
   const canvas = document.getElementById("stars");
   const game = new Game(canvas);

   


   game.animate();

   // ajout d'un intervalle pour ajouter une soucoupe toutes les 700 millisecondes
   setInterval(() => {
      game.addSaucer();
   }, 600);

   window.addEventListener('keydown', game.keyDownActionHandler.bind(game));
   window.addEventListener('keyup', game.keyUpActionHandler.bind(game));
}

window.addEventListener("load", init);

//
console.log('le bundle a été généré');
