/**
 * gulp.js task configuration file for the karma test runner
 */
module.exports = function (config) {
  const configuration = {
    basePath: "../src",
    logLevel: "INFO", //Use "DEBUG" to troubleshoot problems

    frameworks: [
      "jasmine",
      "karma-typescript"],

    files: [
      {pattern: "./scripts/**/*.spec.ts"}],

    preprocessors:{
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
    }
  };

  config.set(configuration);
};