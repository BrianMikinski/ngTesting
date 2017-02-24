# ngTesting ![build](https://brianmikinski.visualstudio.com/_apis/public/build/definitions/7ed81cbf-a6e0-4ace-98a2-7856142c333f/2/badge)

## Testing AngularJs web apps with npm, Bower, Gulp and Jasmine

Exploring front development with unit testing and e2e testing in angular with npm, Bower, Gulp, Jasmine


## Getting Started

Suggested editor for repo is __Visual Studio Code__.
Use the following commands to build, test and run the project. It is usually best to open a separate terminal window in the source root.

1. Build
    * Builds are run using the gulp task __build:compileTypeScript__

    * To compile gulp scripts open a Visual Studio code terminal and run the following command from the source root and run the following command

    * __node_modules\.bin\gulp build:compileTypeScript__
2. Test

    * Tests can be run using the gulp task __test__
    * To run karma test scripts in gulp, open a Visual Studio Code terminal and run the following command from the source root
    * __node_modules\.bin\gulp test__
    * Note: Tests are set to run in PhantomJs, Chrome and Firefox. If any of these browsers are not installed, Karma will hang until until they
    are not found. This can take ~30s or so

3. Run/Host
    * Run the following command in a terminal window to install all npm requirements and startup the http-server needed to server files
    * ___npm start___

4. Clean
    * To clean and remove generated TypeScript files use the following command -
    * __node_modules\.bin\gulp clean:TypeScript__
    * To clean npm packages use the following command
    * ___npm prune___

## Debug: VS Code - Chrome Debugging Setup

Visual Studio Code Chrome Debugging by performing the following -

1. Run ___npm start___
   * You must setup node.js to publish static files. "npm start" installs all npm packages and runs the node http-server package.
2. Add a path variable to __C:\Program Files (x86)\Google\Chrome\Application__ or the location of chrome
3. Run ___chrome.exe --remote-debugging-port=9222___
4. Run ___ctrl+F5___ from the vs code project
5. TODO: Add gulp build task to start chrome.exe

## TypeScript Definition Management (.d.ts type definitions)

Type definition management in TypeScript 2.0 is managed with node. This is different from previous versions of TypeScript.
Install definition files using ___npm install @types/libraryname___.

If you are unable to find the type definition you are looking for use the __npm typings__ package.

## npm typings commands

For most libraries this npm module is not needed and vanilla ___npm @types/library___ name can be used. If that is not the case the following commands can be used with the npm typings module.

Search for Typings
___node_modules\.bin\typings search bootstrap___

Install Typings globally for project
___node_modules\.bin\typings install dt~bootstrap --save --global___

Search for Typings
node_modules\.bin\typings search bootstrap

Install Typings
___node_modules\.bin\typings install dt~bootstrap --save --global___

## Protractor Integration Tests

Coming soon...