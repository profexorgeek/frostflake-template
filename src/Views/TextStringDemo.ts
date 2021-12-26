import View from 'frostflake/src/Views/View';
import Text from 'frostflake/src/Positionables/Text';

// This class demonstrates how to use the FrostFlake
// Text object. UI in FrostFlake should generally be
// handled outside of the engine with DOM elements and
// your favorite framework. But the Text object is great
// for small text elements like damage numbers, hitpoints, etc

export default class TextStringDemo extends View {

    private stringText: Text

    async initialize(): Promise<void> {
        await super.initialize();

        // specify properties on the text string
        this.stringText = new Text('Example text');
        this.stringText.font = '24px sans-serif';
        this.stringText.textAlign = 'center';
        this.stringText.fillStyle = 'blue';
        this.stringText.strokeStyle = 'magenta';

        // set some rotation velocity
        this.stringText.velocity.rotation = 1.5;

        // add it to the scene graph
        this.addChild(this.stringText);
    }
}