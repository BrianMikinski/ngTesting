/**
 * gulp.js task configuration file for the karma test runner
 */
module.exports = function (config) {
  const configuration = {
    basePath: "../src",
    logLevel: "DEBUG", //Use "DEBUG" to troubleshoot problems

    frameworks: [
      "jasmine",
      "karma-typescript",
      "requirejs"], //Required for TypeScript module loading

    files: [
      { pattern: "./scripts/**/*.spec.ts" },
      { pattern: "./scripts/**/*.ts"},
      { pattern: "../bower_components/angular/angular.min.js", included: false }, //You will get the famous "...cannot find module "angular"
      { pattern: "../bower_components/angular-mocks/angular-mocks.js", included: false },
      { pattern: "../bower_components/angular-messages/angular-messages.js", included: false },
      { pattern: "../bower_components/requirejs/require.js", included: true },
      { pattern: "../wwwroot/scripts/main.specs.js", included: true}],

    preprocessors: {
      "./scripts/**/*.ts": ["karma-typescript"]
    },

    browsers: [
      //"PhantomJS", //PhantomJS does not support es6. Support is planned for release 2.5
      "Chrome"],

    reporters: [
      "progress",
      "karma-typescript"],

    singleRun: true,

    //We must compile our typescript files prior to running the tests
    karmaTypescriptConfig: {
      tsconfig: "../tsconfig.json", //if we need to use the same tsconfig
      reports: {
        "html": "coverage",
        "text-summary": ""
      }
    },
  };

  config.set(configuration);
};