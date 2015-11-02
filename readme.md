# Simple tests using Browserify with Typescript

## 1 Basic JS

This is a basic test bundling plain vanilla javascript files in one file.
Use `npm build` to invoke browserify

## 2 Basic TS

This is a basic test bundling Typescript files as one plain javascript file.
Uses tsify plugin to preprocess .ts files before bundling.

## 3 React TS

This is a simple experiment bringing React and .tsx files into the picture.
Uses tsify plugin with the `--jsx react` option to preprocess .tsx files before bundling.

## 4 React TS using gulp

This would be the base for a full react base application.
Uses gulp to complie and or watch TSX files and bundle everything in one js file.
In this example the `--production` command line argument can be used with gulp
to skip the generation of the map files.

 
