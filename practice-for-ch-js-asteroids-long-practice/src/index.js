import Game from "./game.js";
import GameView from "./game_view.js";
import MovingObject from "./moving_object.js";
import Asteroid from "./asteroid.js";

window.MovingObject = MovingObject; 

document.addEventListener("DOMContentLoaded", () => {

    const canvasEl = document.getElementById("game-canvas");
            canvasEl.width= Game.DIM_X; 
            canvasEl.height= Game.DIM_Y;
    const ctx = canvasEl.getContext("2d");
            ctx.fillStyle = "black"
            ctx.fillRect(0, 0, canvasEl.width, canvasEl.height)

    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
      });
    
      mo.draw(ctx);

      const asteroid = new Asteroid({ pos: [30, 30] });
      asteroid.draw(ctx);
    
      const game = new Game();
      const gameView = new GameView(game, ctx);
    
      gameView.start();

 });
console.log("Webpack is working!")