import View from 'frostflake/src/Views/View';
import FrostFlake from 'frostflake/src/FrostFlake';
import Mouse from 'frostflake/src/Input/Mouse';

export default class AudioDemo extends View {

    async initialize() {
        await super.initialize();

        // preload a sound for playing in this screen
        await FrostFlake.Game.audio.loadSound('/content/laser.wav');
    }

    update() {
        super.update();

        if(FrostFlake.Game.input.buttonPushed(Mouse.Left)) {
            FrostFlake.Game.audio.playSound('/content/laser.wav');
        }

    }
}