# npm Bower, Gulp, Jasmine, Angular, Unit Testing, e2e Testing #
Exploring front end build systems and testing with NPM, Bower, Gulp, Jasmine, Angular

- - - - 

### npm Startup Server ###
Run the following command in a terminal window to install all npm requirements and startup the http-server needed
to server files

npm start

- - - -

### VS Code - Chrome Debugging Setup ###
Visual Studio Code Chrome Debugging by performing the following
1. Run __npm start__
        1.You must setup node.js to publish static files. "npm start" installs all npm packages and runs the node http-server package.
2. Add a path variable to __C:\Program Files (x86)\Google\Chrome\Application__ or the location of chrome
3. Run __chrome.exe --remote-debugging-port=9222__
4. Run ctrl+F5 from the vs code project
5. TODO: Add gulp build task to start chrome.exe

- - - - 

### TypeScript Definition Management (.d.ts type definitions) ###
Type definition management in TypeScript 2.0 is managed with node. __This is different from previous versions of TypeScript.__This

Install definition files using npm install @types/_libraryname_.

If you are unable to find the type definition you are looking for use the __npm typings__ package.

- - - - 

#### npm typings commands ###

Search for Typings
__node_modules\.bin\typings search bootstrap__

Install Typings globally for project
__node_modules\.bin\typings install dt~bootstrap --save --global__

Search for Typings
node_modules\.bin\typings search bootstrap

Install Typings
__node_modules\.bin\typings install dt~bootstrap --save --global__

- - - -

### npm remove unused packages ###
Use the following command to remove unused node packages

__npm prune__