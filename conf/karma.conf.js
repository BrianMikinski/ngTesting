/**
 * gulp.js task configuration file for the karma test runner
 */
module.exports = function (config) {
  const configuration = {
    basePath: "../wwwroot/scripts/",
    logLevel: "DEBUG", //Use "DEBUG" to troubleshoot problems,
    browserNoActivityTimeout: 50000,

    frameworks: [
      "jasmine"//,
      /*"requirejs"*/], //Required for TypeScript module loading

    files: [

      "../../bower_components/angular/angular.min.js",
      "../../bower_components/angular-mocks/angular-mocks.min.js",
      "../../bower_components/requirejs/require.js",
      '../../node_modules/karma-requirejs/lib/adapter.js',

      //{pattern: "../bower_components/requirejs/require.js", included: true},
      // { pattern: "../../src/scripts/*.ts", included: false },
      // { pattern: "../../src/scripts/**/*.ts", included: false },
      // { pattern: "./../src/scripts/**/*.spec.ts", included:false },

      { pattern: "*.js", included: false },
      { pattern: "**/*.js", included: false },
      { pattern: "**/*.spec.js", included: false },
      { pattern: "*.spec.js", included: false },
      //"",
      //{ pattern: "*.spec.js", included: false },
      "main.specs.js"],

    //{ pattern: "../bower_components/angular/angular.min.js", included: false },  //You will get the famous "...cannot find module "angular"
    //{ pattern: "../bower_components/angular-mocks/angular-mocks.js", included: false },
    //{ pattern: "../bower_components/angular-messages/angular-messages.js", included: false },

    exclude: [ 
      "main.js"],

    // preprocessors: {
    //   "../../src/scripts/*.ts": ["typescript"]
    // },

    browsers: [
      //"PhantomJS", //PhantomJS does not support es6. Support is planned for release 2.5
      "Chrome"],
      //autoWatch: true,

    // reporters: [
    //   "progress",
    //   "karma-typescript"],

    //singleRun: false,


    //We must compile our typescript files prior to running the tests
    // karmaTypescriptConfig: {
    //   tsconfig: "../tsconfig.json", //if we need to use the same tsconfig
    //   reports: {
    //     "html": "coverage",
    //     "text-summary": ""
    //   }
    // },

    // typescriptPreprocessor: {
    //   //tsconfig: "../tsconfig.json",
    //   // transforming the filenames
    //   options: {
    //     sourceMap: true,
    //     target: "ES6",
    //     module: "amd",
    //     noImplicityAny: true,
    //     concatenateOutput: false
    //   },
    //   transformPath: function (path) {
    //     return path.replace(/\.ts$/, '.js');
    //   },
    // }

  };

  config.set(configuration);
};