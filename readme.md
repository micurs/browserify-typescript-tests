# Simple tests using Browserify with Typescript

This repo contains a few experiment on using Browserify along with React.js TypeScript and other libraries.

## 1 A Basic JS example

This is a very basic example bundling plain vanilla javascript files in one.
You need to have browserify install globally (`nom i browserify -g`). 
After you install the local dependencies use `npm run build` to invoke browserify command.


## 2 A Basic TypeScript example 

Another very basic example. This time we use TypeScript to write the code.
We use tsify plugin in browserify to preprocess the TypeScript files during bundling.
Again the build is a single command in the package.json file you can invoke using npm:
`npm run build`.

## 3 Use Typescript and React components as .tsx files 

Now that we have TypeScript working let's add React into the picture/ 
In this example we define React components in Typescript/JSX syntax in .tsx files.
Using tsify we can pass this parameter `--jsx react` to the Typescript compiler 
managing the transformation of the .tsx files for our components.

## 4 Gulp to compile and watch  

Unitl now we had a single broserify command dealing with building our bundle.
When the project grow in complexity we can move the process of tranforming our
files to Gulp.
Within Gulp we can use Browserify API directly and with the help of a couple simple 
gulp plugins manage the transformation of our React tsx components into a single js file.

Using gulp we can also implement two variation of our our transformation: one for development
with map file and uncompress javascript and one for production with no map file and uglified
javascript.

Run `gulp --production` to producer a single uglified javascript file containing your code and
all its depoendencies to be used in the application web page.


 
