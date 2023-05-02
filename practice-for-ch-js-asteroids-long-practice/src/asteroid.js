import * as Util from "./util.js";
import MovingObject from "./moving_object.js";

class Asteroid extends MovingObject {

    static COLOR = "#808080";
    static RADIUS = 25;

    constructor(options) {
        super(options);
        this.color = Asteroid.COLOR;
        this.radius = Asteroid.RADIUS;
        this.vec = Util.randomVec(5);
    }
}

export default Asteroid;