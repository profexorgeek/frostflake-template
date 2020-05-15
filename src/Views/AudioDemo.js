import View from 'frostflake/Views/View';
import FrostFlake from 'frostflake';
import Mouse from 'frostflake/Input/Mouse';

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