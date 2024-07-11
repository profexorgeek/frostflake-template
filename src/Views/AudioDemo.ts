import View from 'frostflake/src/Views/View';
import FrostFlake from 'frostflake/src/FrostFlake';
import { MouseButtons } from 'frostflake/src/Input/Codes';
import Text from 'frostflake/src/Positionables/Text';

// This class demonstrates playing a sound. The user must
// have pressed a key while FrostFlake has focus before the audio
// engine can be loaded and a sound can be played

export default class AudioDemo extends View {

    // the path to the sound file we will play
    private soundFileName: string = '/content/laser.wav';
    private stringText: Text;

    async initialize(): Promise<void> {
        await super.initialize();

        // preload a sound for playing in this screen
        await FrostFlake.Game.audio.loadSound(this.soundFileName);

        // add a text object so the user knows something is happening
        this.stringText = new Text("Left click to play a sound!");
        this.stringText.textAlign = "center";
        this.stringText.color = "white";

        this.addChild(this.stringText);
    }

    update(): void {
        super.update();

        // play the loaded sound on click
        if(FrostFlake.Game.input.buttonPushed(MouseButtons.Left)) {
            FrostFlake.Game.audio.playSound(this.soundFileName);
        }
    }
}