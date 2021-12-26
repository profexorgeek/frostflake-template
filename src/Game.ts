import FrostFlake from 'frostflake/src/FrostFlake';
import AnimationDemo from './Views/AnimationDemo';
import AudioDemo from './Views/AudioDemo';
import CollisionDemo from './Views/CollisionDemo';
import InputDemo from './Views/InputDemo';
import ManySpritesDemo from './Views/ManySpritesDemo';
import ParentChildDemo from './Views/ParentChildDemo';
import RenderTargetDemo from './Views/RenderTargetDemo';

export default class Game extends FrostFlake {
    customViews = [];
    secondsPerView = 10;
    secondsToNextView = 10;
    currentViewIndex = 0;

    constructor() {
        super(document.getElementById('game'), 60);                
        this.customViews.push(AnimationDemo);
        this.customViews.push(AudioDemo);
        this.customViews.push(CollisionDemo);
        this.customViews.push(InputDemo);
        this.customViews.push(ManySpritesDemo);
        this.customViews.push(ParentChildDemo);
        this.customViews.push(RenderTargetDemo);
        this.view = new (this.customViews[this.currentViewIndex])();
    }

    update() {
        super.update();

        if(this.secondsToNextView <= 0) {
            this.currentViewIndex++;
            if(this.currentViewIndex > this.customViews.length - 1) {
                this.currentViewIndex = 0;
            }
            let viewType = this.customViews[this.currentViewIndex];
            this.view = new viewType();
            this.secondsToNextView = this.secondsPerView;
        }

        this.secondsToNextView -= this.time.frameSeconds;
    }
}