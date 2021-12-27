import FrostFlake from 'frostflake/src/FrostFlake';
import Sprite from 'frostflake/src/Positionables/Sprite';
import View from 'frostflake/src/Views/View';
import MathUtil from 'frostflake/src/Utility/MathUtil';
import Data from 'frostflake/src/Data/Data';

// A render target is a temporary image that is rendered to a
// single time. Render targets are used to render a lot of static
// objects to a single image that can then be used as a single sprite.
// In this example, thousands of sprites are drawn to a render target
// and that target is used as a single sprite. This is much faster than
// trying to re-render thousands of sprites every frame.

export default class RenderTargetDemo extends View {

    // the texture to use for sprites
    static TEXTURE: string      = '/content/frostflake.png';

    // the name of our render target
    static TARGETNAME: string   = 'renderTarget';

    // the number of sprites to draw to our render target
    static SPRITE_COUNT: number = 100000;

    async initialize(): Promise<void> {
        super.initialize();

        // temporary array to hold all of our sprites
        let sprites: Array<Sprite>  = [];

        // load the image we use for rendering our one-time texture
        await Data.loadImage(RenderTargetDemo.TEXTURE);

        // add a ton of sprites
        FrostFlake.Log.info(`Adding ${RenderTargetDemo.SPRITE_COUNT} sprites for one-time render`);
        for (let i = 0; i < RenderTargetDemo.SPRITE_COUNT; i++) {
            let s = new Sprite(RenderTargetDemo.TEXTURE);
            s.x = MathUtil.randomInRange(-300, 300);
            s.y = MathUtil.randomInRange(-200, 200);
            s.alpha = MathUtil.randomInRange(0.2, 0.85);
            s.scale = MathUtil.randomInRange(0.15, 0.2);
            s.position.rotation = MathUtil.randomInRange(-3, 3);

            // add the sprite to the tmp array
            sprites.push(s);
        }

        // now render all of the sprites in the temporary array to a new 640x480 texture
        await FrostFlake.Game.renderer.renderCustomImage(RenderTargetDemo.TARGETNAME, sprites, 640, 480);

        // create a sprite that uses the custom texture
        let renderedSprite = new Sprite(RenderTargetDemo.TARGETNAME);

        // give the whole texture a rotation velocity
        renderedSprite.velocity.rotation = MathUtil.randomInRange(-1, 1);

        // add the single sprite to the scene graph
        this.addChild(renderedSprite);
    }
}