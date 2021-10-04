# FrostFlake game template

This is a template project to make it easy to get started with the [FrostFlake game engine](https://github.com/profexorgeek/frostflake).

This repo includes a basic webpack configuration, **project.json** and some custom `View`s that show how to use the engine. You can build and serve your game in a browser with a single command using webpack and the webpack-dev-server.

The general idea is to fork this repo to get an easy starting point, and use that as the basis of your game.

## Basic: Build with NPM dependency

You will need to have Node installed and a basic understanding of how to run
Node commands in a terminal. Follow these steps to start a new game with
the [FrostFlake game engine](https://github.com/profexorgeek/frostflake):

1. Fork this repo and clone locally.
1. Run: `npm install` to fetch FrostFlake and webpack dependencies.
1. Run: `npm start` to build, watch for file changes, and serve the game.
1. Visit `http://localhost:8080` to see the template game running.
1. Browse the **src** folder to see demos of how the engine works and start building your own game!

## Advanced: Build with frostflake source

By default, this template uses the published NPM package. However, you can configure it to build
frostflake from source:

1. Fork this repo and clone locally
1. Fork the frostflake repo to be in the same parent folder as your game template. For example:
  - `/projects/my-template-project/`
  - `/projects/my-frostflake-clone/`
1. In your template directory, run: `npm install "../my-frostflake-clone"`
1. This should update the dependency in your template project's `package.json` file so instead of pointing to a specific version hosted on NPM, it instead points to `../my-frostflake-clone` locally