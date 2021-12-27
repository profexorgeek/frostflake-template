import View from 'frostflake/src/Views/View';
import Sprite from 'frostflake/src/Positionables/Sprite';
import Frame from 'frostflake/src/Drawing/Frame';
import Animation from 'frostflake/src/Drawing/Animation';
import Data from 'frostflake/src/Data/Data';

// This class demonstrates frame-based animation.
// The animation class stores a series of frames and
// frame timings. Setting an animation on a sprite
// overrides any existing frame or texture data.

export default class AnimationDemo extends View {

    async initialize() {
        await super.initialize();

        // load content used by this view
        await Data.loadImage('/content/spritesheet.png');

        // create an animation object with 8, 0.1 second frames
        let runCycle: Animation = new Animation();
        runCycle.texture = '/content/spritesheet.png';
        runCycle.frames = [
            new Frame(0, 160, 16, 16, 0.1),
            new Frame(16, 160, 16, 16, 0.1),
            new Frame(32, 160, 16, 16, 0.1),
            new Frame(48, 160, 16, 16, 0.1),
            new Frame(64, 160, 16, 16, 0.1),
            new Frame(80, 160, 16, 16, 0.1),
            new Frame(96, 160, 16, 16, 0.1),
            new Frame(112, 160, 16, 16, 0.1)
        ];

        // create a sprite and set the animation
        let sprite = new Sprite();
        sprite.animation = runCycle;

        // the sprite is only 16x16, increase it's scale
        // for easier visibility
        sprite.scale = 3;

        // add the sprite to the scene graph
        this.addChild(sprite);
    }
}