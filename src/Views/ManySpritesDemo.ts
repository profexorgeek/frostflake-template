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

    private spritePath: string = '/content/frostflake.png';

    async initialize(): Promise<void> {
        await super.initialize();

        // load data required by this view
        await Data.loadImage(this.spritePath);

        // Create 2000 sprites
        for (let i = 0; i < 2000; i++) {

            // create a new sprite, passing a path to an image file
            let s = new Sprite(this.spritePath);

            // randomize the sprite's position
            s.x = MathUtil.randomInRange(-300, 300);
            s.y = MathUtil.randomInRange(-200, 200);

            // randomize the alpha (transparency)
            s.alpha = MathUtil.randomInRange(0.2, 0.85);

            // randomize the rotation velocity
            s.velocity.rotation = MathUtil.randomInRange(-3, 3);

            // add the sprite to this view so it is updated and rendered
            this.addChild(s);
        }
    }

    update(): void {
        super.update();

        // get the ave FPS from the GameTime instance and log it
        FrostFlake.Log.info(FrostFlake.Game.time.aveFps());
    }
}