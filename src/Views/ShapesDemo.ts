import View from 'frostflake/src/Views/View';
import Shape from 'frostflake/src/Positionables/Shape';
import Rectangle from 'frostflake/src/Positionables/Rectangle';
import Circle from 'frostflake/src/Positionables/Circle';
import MathUtil from 'frostflake/src/Utility/MathUtil';
import FrostFlake from 'frostflake/src/FrostFlake';
import Line from 'frostflake/src/Positionables/Line';
import Grid from 'frostflake/src/Positionables/Grid';

// This class demonstrates how to draw colored
// shapes with FrostFlake. Shapes are typically
// only used for collision or debug and aren't
// intended to be game objects. JavaScript canvas
// draws shapes relatively slowly so be careful
// using shapes heavily in a real game.

export default class ShapesDemo extends View {

    readonly numberOfShapes: number      = 20;
    readonly maxVelocity: number         = 10;
    readonly minSize: number             = 5;
    readonly maxSize: number             = 50;
    readonly minAlpha: number            = 0.25;
    readonly maxAlpha: number            = 1;

    async initialize(): Promise<void> {
        await super.initialize();

        let cam = FrostFlake.Game.camera;

        // create a background grid
        const grid = new Grid(50, 32);
        grid.alpha = 0.25;
        this.addChild(grid);

        // create a bunch of shapes with random size, color, and velocity
        for(let i = 0; i < this.numberOfShapes; i++) {
            let s: Shape;
            let roll = Math.random();
            if(roll < 0.33) {
                s = new Circle(MathUtil.randomInRange(this.minSize, this.maxSize));
            }
            else if (roll < 0.66) {
                let size = MathUtil.randomInRange(this.minSize, this.maxSize);
                s = new Rectangle(size, size);
            }
            else {
                let length = MathUtil.randomInRange(this.minSize, this.maxSize);
                let thickness = MathUtil.randomIntInRange(1, 8);
                s = new Line(length, thickness);
                
            }

            s.position = cam.randomPositionInView;

            // NOTE: we set this AFTER setting the position because rotation is part of the position
            s.rotation = MathUtil.randomInRange(-Math.PI, Math.PI);

            s.color = this.randomColorString();
            s.alpha = MathUtil.randomInRange(this.minAlpha, this.maxAlpha);
            s.velocity.x = MathUtil.randomInRange(-this.maxVelocity, this.maxVelocity);
            s.velocity.y = MathUtil.randomInRange(-this.maxVelocity, this.maxVelocity);
            
            this.addChild(s);
        }
    }

    update(): void {
        super.update();

        // get the ave FPS from the GameTime instance and log it
        FrostFlake.Log.trace(`Ave FPS: ${FrostFlake.Game.time.aveFps()}`);
    }

    // helper to get a random color as an rgb string
    randomColorString(): string {
        let r = Math.round(MathUtil.randomInRange(0, 255));
        let g = Math.round(MathUtil.randomInRange(0, 255));
        let b = Math.round(MathUtil.randomInRange(0, 255));
        return `rgb(${r},${g},${b})`;
    }
}