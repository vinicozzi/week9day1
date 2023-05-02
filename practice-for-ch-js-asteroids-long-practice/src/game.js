    import Asteroid from "./asteroid.js";

    Game.DIM_X = 1000;
    Game.DIM_Y = 600;
    Game.NUM_ASTEROIDS = 20;


    class Game {
      constructor() {
        this.asteroids = [];
        this.addAsteroids();
      }
    
      addAsteroids() {
        for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
          const asteroid = new Asteroid({
            pos: this.randomPosition(),
          });
          this.asteroids.push(asteroid);
        }
      }
    
      randomPosition() {
        const x = Math.floor(Math.random() * Game.DIM_X);
        const y = Math.floor(Math.random() * Game.DIM_Y);
        return [x, y];
      }

      draw(ctx) {
        this.clearRect(ctx);
        this.asteroids.forEach((el)=> {
            el.draw(ctx) 
        })
      }

      moveObjects() {
        this.asteroids.move 
      }
    }
    
    
    export default Game;
