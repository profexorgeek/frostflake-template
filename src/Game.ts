import AnimationDemo from './Views/AnimationDemo';
import AudioDemo from './Views/AudioDemo';
import CollisionDemo from './Views/CollisionDemo';
import FrostFlake from "frostflake/src/FrostFlake";
import InputDemo from './Views/InputDemo';
import LogLevel from "frostflake/src/Logging/LogLevel";
import ManySpritesDemo from './Views/ManySpritesDemo';
import ParentChildDemo from './Views/ParentChildDemo';
import RenderTargetDemo from './Views/RenderTargetDemo';
import ShapesDemo from "./Views/ShapesDemo";
import TextStringDemo from "./Views/TextStringDemo";
import View from "frostflake/src/Views/View";

// This custom Game class serves as both a demo and a test.
// There are custom Views demonstrating FrostFlake capabilities
// in the Views folder. This game advances through the custom
// Views, demonstrating the capabilities of the FrostFlake engine.

export default class Game extends FrostFlake {
    readonly secondsPerView: number      = 5;

    private customViews: Array<typeof View>     = [];
    private secondsToNextView:number    = this.secondsPerView;
    private currentViewIndex:number     = 0;

    constructor() {
        // pass the canvas element with ID 'game' to the parent
        // constructor and set fps to 60
        super(document.getElementById('game') as HTMLCanvasElement, 60);  

        // push custom views into array
        this.customViews.push(AnimationDemo);
        this.customViews.push(AudioDemo);
        this.customViews.push(CollisionDemo);
        this.customViews.push(InputDemo);
        this.customViews.push(ManySpritesDemo);
        this.customViews.push(ParentChildDemo);
        this.customViews.push(RenderTargetDemo);
        this.customViews.push(ShapesDemo);
        this.customViews.push(TextStringDemo);
        
        // set the current view to the first typpe in the list
        this.view = new (this.customViews[this.currentViewIndex])();

        FrostFlake.Log.level = LogLevel.Trace;
    }

    update(): void {
        super.update();

        // if our timer has ran out, advance to the next view
        if(this.secondsToNextView <= 0) {

            // update the view index
            this.currentViewIndex++;
            if(this.currentViewIndex > this.customViews.length - 1) {
                this.currentViewIndex = 0;
            }

            // get the type from the array
            let viewType = this.customViews[this.currentViewIndex];

            // log what we're doing
            FrostFlake.Log.info(`Moving to new view of type: ${viewType.name}`);

            // get the old view so we can destroy it
            let oldView = this.view;

            // create a new view of the dynamic type
            this.view = new viewType();

            // update the countdown timer
            this.secondsToNextView = this.secondsPerView;
        }

        // decrement the countdown timer by elapsed frame time
        this.secondsToNextView -= this.time.frameSeconds;
    }
}