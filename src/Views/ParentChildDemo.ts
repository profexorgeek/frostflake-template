import FrostFlake from 'frostflake/src/FrostFlake';
import Sprite from 'frostflake/src/Positionables/Sprite';
import View from 'frostflake/src/Views/View';
import Data from 'frostflake/src/Data/Data';

// This class demonstrates how the FrostFlake
// scene graph works. Every Postionable object
// (including Sprite) can have a parent and children.
// When an object has a parent, it's coordinates and
// rotation become relative to the parent.

export default class ParentChildDemo extends View {
    private parentFlake: Sprite;
    private childFlake1: Sprite;
    private childFlake2: Sprite;
    private spritePath: String = '/content/frostflake.png';

    async initialize(): Promise<void> {
        await super.initialize();

        // load data required by this view
        await Data.loadImage(this.spritePath);

        // create a parent sprite and add it to the View sprites
        this.parentFlake = new Sprite(this.spritePath);
        this.parentFlake.velocity.rotation = 3;
        this.addChild(this.parentFlake);

        // create and attach a child sprite
        this.childFlake1 = new Sprite(this.spritePath);
        this.childFlake1.x = -40;
        this.childFlake1.velocity.rotation = -5;
        this.parentFlake.addChild(this.childFlake1);

        // create and attach a child sprite
        this.childFlake2 = new Sprite(this.spritePath);
        this.childFlake2.x = 40;
        this.childFlake2.velocity.rotation = 5;
        this.parentFlake.addChild(this.childFlake2);
    }

    update(): void {
        super.update();

        // log a child's relative versus absolute positions
        let child = this.childFlake1;
        FrostFlake.Log.info(`Relative vs absolute position: ${child.x},${child.y} - ${child.absolutePosition.x},${child.absolutePosition.y}`);
    }
}