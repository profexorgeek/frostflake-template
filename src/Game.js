import FrostFlake from '../node_modules/frostflake/FrostFlake.js';

import AnimationDemo from './Views/AnimationDemo.js';
import AudioDemo from './Views/AudioDemo.js';
import CollisionDemo from './Views/CollisionDemo';
import InputDemo from './Views/InputDemo';
import ManySpritesDemo from './Views/ManySpritesDemo';
import ParentChildDemo from './Views/ParentChildDemo.js';
import RenderTargetDemo from './Views/RenderTargetDemo.js';

export default class Game extends FrostFlake {
    customViews = [];
    secondsPerView = 10;
    secondsToNextView = 10;
    currentViewIndex = 0;

    constructor() {
        let canvasElement = document.getElementById('game');
        super(canvasElement, 60);
        
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