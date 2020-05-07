import FrostFlake from '../../node_modules/frostflake/FrostFlake.js';
import Sprite from '../../node_modules/frostflake/Positionables/Sprite.js';
import View from '../../node_modules/frostflake/Views/View.js';
import MathUtil from '../../node_modules/frostflake/Utility/MathUtil.js';
import Data from '../../node_modules/frostflake/Data/Data.js';

// This class demonstrates how to create sprites,
// add the sprites to the current view,
// and give them a few custom properties.
// This view also serves as a load test

export default class ManySpritesDemo extends View {

    async initialize() {
        await super.initialize();

        // load data required by this view
        await Data.loadImage('/content/frostflake.png');

        // Create 2000 sprites
        for (let i = 0; i < 2000; i++) {

            // create a new sprite, passing a path to an image file
            let s = new Sprite('/content/frostflake.png');

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

    update() {
        super.update();

        // get the ave FPS from the GameTime instance and log it
        FrostFlake.Log.info(FrostFlake.Game.time.aveFps());
    }
}