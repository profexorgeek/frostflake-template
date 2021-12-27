import View from 'frostflake/src/Views/View';
import FrostFlake from 'frostflake/src/FrostFlake';
import Mouse from 'frostflake/src/Input/Mouse';

// This class demonstrates playing a sound. The user must
// have pressed a key while FrostFlake has focus before the audio
// engine can be loaded and a sound can be played

export default class AudioDemo extends View {

    // the path to the sound file we will play
    private soundFileName: string = '/content/laser.wav'

    async initialize(): Promise<void> {
        await super.initialize();

        // preload a sound for playing in this screen
        await FrostFlake.Game.audio.loadSound(this.soundFileName);
    }

    update(): void {
        super.update();

        // play the loaded sound 
        if(FrostFlake.Game.input.buttonPushed(Mouse.Left)) {
            FrostFlake.Game.audio.playSound(this.soundFileName);
        }
    }
}