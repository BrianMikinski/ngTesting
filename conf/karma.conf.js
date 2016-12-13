/**
 * gulp.js task configuration file for the karma test runner
 */
module.exports = function (config) {
  const configuration = {
    basePath: "../src",
    logLevel: "DEBUG", //Use "DEBUG" to troubleshoot problems

    frameworks: [
      "jasmine",
      "requirejs"], //Required for TypeScript module loading

    files: [
      
      //{ pattern: "../bower_components/requirejs/require.js", included: false },
      { pattern: "./scripts/*.ts", included: false},
       "../wwwroot/scripts/main.specs.js",
      { pattern: "./scripts/**/*.ts", included: false },
      { pattern: "./scripts/**/*.spec.ts", included:false }],

    //{ pattern: "../bower_components/angular/angular.min.js", included: false },  //You will get the famous "...cannot find module "angular"
    //{ pattern: "../bower_components/angular-mocks/angular-mocks.js", included: false },
    //{ pattern: "../bower_components/angular-messages/angular-messages.js", included: false },

    exclude: [
      "../wwwroot/scripts/main.js"],

    preprocessors: {
      "./scripts/**/*.ts": ["typescript"]
    },

    browsers: [
      //"PhantomJS", //PhantomJS does not support es6. Support is planned for release 2.5
      "Chrome"],

    reporters: [
      "progress",
      "karma-typescript"],

    singleRun: true,

    //We must compile our typescript files prior to running the tests
    // karmaTypescriptConfig: {
    //   tsconfig: "../tsconfig.json", //if we need to use the same tsconfig
    //   reports: {
    //     "html": "coverage",
    //     "text-summary": ""
    //   }
    // },

    typescriptPreprocessor: {
      //tsconfig: "../tsconfig.json",
      // transforming the filenames
      options: {
        sourceMap: true,
        target: "ES6",
        module: "amd",
        noImplicityAny: true,
        concatenateOutput: false
      },
      transformPath: function (path) {
        return path.replace(/\.ts$/, '.js');
      },
    }

  };

  config.set(configuration);
};