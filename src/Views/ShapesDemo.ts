import View from 'frostflake/src/Views/View';
import Shape from 'frostflake/src/Positionables/Shape';
import Rectangle from 'frostflake/src/Positionables/Rectangle';
import Circle from 'frostflake/src/Positionables/Circle';
import MathUtil from 'frostflake/src/Utility/MathUtil';
import FrostFlake from 'frostflake/src/FrostFlake';

// This class demonstrates how to draw colored
// shapes with FrostFlake. Shapes are typically
// only used for collision or debug and aren't
// intended to be game objects. JavaScript canvas
// draws shapes relatively slowly so be careful
// using shapes heavily in a real game.

export default class ShapesDemo extends View {

    readonly numberOfShapes: number      = 5000;
    readonly maxVelocity: number         = 10;
    readonly minSize: number             = 2;
    readonly maxSize: number             = 20;

    async initialize(): Promise<void> {
        await super.initialize();

        let cam = FrostFlake.Game.camera;

        // create a bunch of shapes with random size, color, and velocity
        for(let i = 0; i < this.numberOfShapes; i++) {
            let s: Shape;
            if(Math.random() < 0.5) {
                s = new Circle(MathUtil.randomInRange(this.minSize, this.maxSize));
            }
            else {
                let size = MathUtil.randomInRange(this.minSize, this.maxSize);
                s = new Rectangle(size, size);
            }
            s.velocity.x = MathUtil.randomInRange(-this.maxVelocity, this.maxVelocity);
            s.velocity.y = MathUtil.randomInRange(-this.maxVelocity, this.maxVelocity);
            s.color = this.randomColorString();
            s.position = cam.randomPositionInView;
            this.addChild(s);
        }
    }

    update(): void {
        super.update();

        // get the ave FPS from the GameTime instance and log it
        FrostFlake.Log.info(FrostFlake.Game.time.aveFps());
    }

    // helper to get a random color as an rgb string
    randomColorString(): string {
        let r = Math.round(MathUtil.randomInRange(0, 255));
        let g = Math.round(MathUtil.randomInRange(0, 255));
        let b = Math.round(MathUtil.randomInRange(0, 255));
        return `rgb(${r},${g},${b})`;
    }
}