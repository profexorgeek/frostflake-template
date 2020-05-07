import FrostFlake from '../../node_modules/frostflake/FrostFlake.js';
import Sprite from '../../node_modules/frostflake/Positionables/Sprite.js';
import View from '../../node_modules/frostflake/Views/View.js';
import MathUtil from '../../node_modules/frostflake/Utility/MathUtil.js';
import Frame from '../../node_modules/frostflake/Drawing/Frame.js';
import Mouse from '../../node_modules/frostflake/Input/Mouse.js';
import Keys from '../../node_modules/frostflake/Input/Keys.js';
import Data from '../../node_modules/frostflake/Data/Data.js';

// This class demonstrates how to get input state
// from the mouse and keyboard. It also demonstrates
// how to put velocity and drag on the game camera

export default class InputDemo extends View {

    cursorSprite;

    async initialize() {
        await super.initialize();

        // load data required by this view
        await Data.loadImage('/content/frostflake.png');
        await Data.loadImage('/content/spritesheet.png');

        // create some random sprites so camera movement is visible
        for (let i = 0; i < 10; i++) {
            let s = new Sprite('/content/frostflake.png');
            s.x = MathUtil.randomInRange(-300, 300);
            s.y = MathUtil.randomInRange(-200, 200);
            s.alpha = MathUtil.randomInRange(0.2, 0.85);
            s.velocity.rotation = MathUtil.randomInRange(-3, 3);
            this.addChild(s);
        }

        // create a sprite based on part of a sprite sheet and add it to the View
        // The frame defines the part of the spritesheet rendered by this sprite
        this.cursorSprite = new Sprite('/content/spritesheet.png');
        this.cursorSprite.frame = new Frame(32, 0, 32, 32);
        this.addChild(this.cursorSprite);

        // give the camera drag so it always slows down
        FrostFlake.Game.camera.drag = 3;
    }

    update() {
        super.update();

        // shortcuts for readability
        let input = FrostFlake.Game.input;
        let cursor = input.cursor;
        let cam = FrostFlake.Game.camera;

        // Pressing WASD gives the camera velocity,
        // causing it to move. The camera drag will
        // slow the camera down as soon as the button
        // is released
        if (input.keyDown(Keys.W)) {
            cam.velocity.y = 100;
        }
        else if (input.keyDown(Keys.S)) {
            cam.velocity.y = -100;
        }
        if (input.keyDown(Keys.A)) {
            cam.velocity.x = -100;
        }
        else if (input.keyDown(Keys.D)) {
            cam.velocity.x = 100;
        }

        // make cursorSprite follow hardware cursor
        this.cursorSprite.x = cursor.worldX;
        this.cursorSprite.y = cursor.worldY;

        // make the cursor spin when the mouse button is pressed
        if(input.buttonDown(Mouse.Left)) {
            this.cursorSprite.velocity.rotation = 3;
        }
        else {
            this.cursorSprite.velocity.rotation = 0;
        }
    }
}