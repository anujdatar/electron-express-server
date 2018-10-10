# electron-express-server
A frontend Electron.js app for running a customizable backend Express.js server.
Frontend Angular frontend adds server customization options
if you don't run it from the command line, while developing a front-end on a separate server/port


## Electron.js to show server stats
now uses an angular frontend
TODO:
  - add functionality, server customizability, to electron frontend
  - customize menu
  - customize electron app look/style

## Express.js
nodemon runs the express server for hot-reloads
TODO:
  - add logging on pages
  - add routing and functionality
===
## Project setup
```
npm install
```

## Run app (Electron+Angular and Express)
  `npm run electron` -> `electron .`
  `npm run electron:test` -> `ng build && electron .`  test app before prod
  `npm run electron:prod` -> `ng build --prod && electron .`  # recommended for production, takes longer for AOT (ahead of time) compilation


## Run Express server only from command-line
  `npm run dev-server` -> `nodemon server.js` only run back end server for reduced overhead


### version
1.0.1

### TODOS:
  - mongojs functionality
  - build/minifying options

### License
MIT

___
### Angular CLI project readme
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

#### Development server
Run `ng serve` or `npm run ng:serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build
Run `ng build` or `npm run ng:build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### run linter
Run `ng lint` or `npm run ng:lint` to lint via [TSLint](https://palantir.github.io/tslint/).

#### Running unit tests
Run `ng test` or `npm run ng:test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests
Run `ng e2e` or `npm run ng:e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
