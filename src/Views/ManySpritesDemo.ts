import FrostFlake from 'frostflake/src/FrostFlake';
import Sprite from 'frostflake/src/Positionables/Sprite';
import View from 'frostflake/src/Views/View';
import MathUtil from 'frostflake/src/Utility/MathUtil';
import Data from 'frostflake/src/Data/Data';

// This class demonstrates how to create sprites,
// add the sprites to the current view,
// and give them a few custom properties.
// This view also serves as a load test

export default class ManySpritesDemo extends View {

    readonly numberOfSprites: number        = 5000;
    readonly minAlpha: number               = 0.1;
    readonly maxAlpha: number               = 0.5;
    readonly minScale: number               = 0.25;
    readonly maxScale: number               = 1;
    readonly maxRotation: number            = 3;
    readonly spritePath: string             = '/content/frostflake.png';

    async initialize(): Promise<void> {
        await super.initialize();

        // load data required by this view
        await Data.loadImage(this.spritePath);

        // Create a ton of sprites
        for (let i = 0; i < this.numberOfSprites; i++) {

            // create a new sprite, passing a path to an image file
            let s = new Sprite(this.spritePath);

            // randomize the sprite's position
            s.position = FrostFlake.Game.camera.randomPositionInView;

            // randomize the alpha (transparency)
            s.alpha = MathUtil.randomInRange(this.minAlpha, this.maxAlpha);

            // randomize scale
            s.scale = MathUtil.randomInRange(this.minScale, this.maxScale);

            // randomize the rotation velocity
            s.velocity.rotation = MathUtil.randomInRange(-this.maxRotation, this.maxRotation);

            // add the sprite to this view so it is updated and rendered
            this.addChild(s);
        }
    }

    update(): void {
        super.update();

        // get the ave FPS from the GameTime instance and log it
        FrostFlake.Log.trace(`Ave FPS: ${FrostFlake.Game.time.aveFps()}`);
    }
}