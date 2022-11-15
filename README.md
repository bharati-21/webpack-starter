# Webpack React Starter Template

Starter template for react app developed using webpack. <br />
[Live deployed website](https://bharati-21.github.io/webpack-starter) 

## Features
- Webpack configuration file at [webpack.config.js](https://github.com/bharati-21/webpack-starter/blob/main/webpack.config.js)
- Loaders: babel, CSS, assets loader in the config file
- HTML webpack plugin: Simplify creation of HTML file that serves bundles
- Code Splitting: Splitting code into chunks that are loaded in parallel
- Lazy Loading: Improved loading of resources on demand with user interaction
- Caching: Increased loading of resources by caching them

<hr />

## Local Setup

### 1. Clone the repo
To clone the repo locally, run the following commands:
```
git clone https://github.com/bharati-21/webpack-starter.git
cd webpack-starter
npm install
npm start #app runs on localhost:8080
```
### 2. Use [degit](https://github.com/Rich-Harris/degit)
To setup locally using degit, run the following commands:
```
npm install -g degit
degit https://github.com/bharati-21/webpack-starter your-new-app
cd your-new-app
npm install
npm start
```
> The app runs on localhost:8080

<hr />

## Development Mode Setup
- To build and generate files in the development mode, run the following command after local setup: `npm run build-dev`.
- This generates the build files within `./dist` folder but they will not be minified.

<hr />

## Production Mode Setup
- To build and generate files in the production mode, run the following command after local setup: `npm run build`.
- This generates the build files within `./dist` folder and they will be minified.
