# npm Bower, Gulp, Jasmine, Angular, Unit Testing, e2e Testing #
Exploring front end build systems and testing with NPM, Bower, Gulp, Jasmine, Angular

- - - - 

### npm Startup Server ###
Run the following command in a terminal window to install all npm requirements and startup the http-server needed
to server files -

___npm start___

To clean and remove unnecessary packages use the follow -

___npm prune___

- - - -

### VS Code - Chrome Debugging Setup ###
Visual Studio Code Chrome Debugging by performing the following
1. Run ___npm start___
   * You must setup node.js to publish static files. "npm start" installs all npm packages and runs the node http-server package.
2. Add a path variable to __C:\Program Files (x86)\Google\Chrome\Application__ or the location of chrome
3. Run ___chrome.exe --remote-debugging-port=9222___
4. Run ___ctrl+F5___ from the vs code project
5. TODO: Add gulp build task to start chrome.exe

- - - - 

### TypeScript Definition Management (.d.ts type definitions) ###
Type definition management in TypeScript 2.0 is managed with node. __This is different from previous versions of TypeScript.__This

Install definition files using ___npm install @types/libraryname___.

If you are unable to find the type definition you are looking for use the __npm typings__ package.

- - - - 

#### npm typings commands ###

Search for Typings
___node_modules\.bin\typings search bootstrap___

Install Typings globally for project
___node_modules\.bin\typings install dt~bootstrap --save --global___

Search for Typings
node_modules\.bin\typings search bootstrap

Install Typings
___node_modules\.bin\typings install dt~bootstrap --save --global___