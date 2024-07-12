# FrostFlake game template

This repo serves as a template project to make it easy to get started with the [FrostFlake game engine](https://github.com/profexorgeek/frostflake).

This repo also acts as a set of end-to-end tests for most of the features of FrostFlake so as features are added, a test `View` should also exist in this repo to test the feature.

The general idea is to fork this repo to get an easy starting point,
and use that as the basis of your game.

## Views and their Purpose

These are the `View`s that exist and what they are demonstrating. Each `View` is heavily commented to help new developers understand how to use engine features.

1. **AnimationDemo** - This `View` shows how to load and play a frame-based animation using a spritesheet and an `Animation` to define frames. It also scales up the sprite so it is more visible, which demonstrates how to use scaling in Frostflake.
1. **AudioDemo** - This `View` shows how to load and play an audio file. It also shows how to listen for mouse clicks, since a mouse click is what triggers the audio event.
1. **CollisionDemo** - This `View` shows how to create collidable sprites and collide them against each other using Frostflake's simple physics system.
1. **ManySpritesDemo** - This `View` renders thousands of `Sprite`s, showing how FrostFlake can handle high-volume sprite rendering. It also randomizes the position, scale, alpha, and rotation velocity properties on each `Sprite`.
1. **ParentChildDemo** - This `View` demonstrates how relative position and velocity work when parenting `Positionable` objects (in this case `Sprite`s) in the scene graph.
1. **RenderTargetDemo** - This `View` demonstrates a more advanced concept called "Render Targets". It renders 100,000 `Sprite`s to a dynamic texture a single time, then it uses that texture in a new `Sprite` which is rendered every frame.
1. **ShapesDemo** - This `View` demonstrates FrostFlake's shape-rendering capabilities. It renders thousands of `Circle` and `Square` shapes with random colors and velocities.
1. **TextStringDemo** - This `View` demonstrates FrostFlake's `Text` object. It renders a short string of text with custom font, size, alignment, stroke, and fill.

## Building the demo

You will need to have Node installed and a basic understanding of how to run
Node commands in a terminal. Follow these steps to start a new project with
the [FrostFlake game engine](https://github.com/profexorgeek/frostflake):

1. Clone the [FrostFlake](https://github.com/profexorgeek/frostflake) game engine
1. Fork this repo (optional) and clone locally, it must be in the same parent folder as the frostflake source for example:
    - *desktop/projects/frostflake*
    - *desktop/projects/frostflake-template*
1. Run: `npm install` to install dependencies.
1. Run: `npm run build` to build the project.
1. Run: `npm start` to build, watch for file changes, and serve the game.
1. Visit `http://localhost:8080` to see the template game running.
1. Browse the **src** folder to see the capabilities highlighted in each `View`.

You can fork this repo, or just download the code, as a starting point for using the engine with everything ready to go!
