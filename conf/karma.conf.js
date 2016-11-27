/**
 * gulp.js task configuration file for the karma test runner
 */
module.exports = function (config) {
  const configuration = {
    basePath: "../src",
    frameworks: [
      "jasmine",
      "karma-typescript"],

    files: [
      {pattern: "./scripts/**/*.spec.ts"}],

    preprocessors:{
      "./scripts/**/*.ts": ["karma-typescript"]
    },
    
    logLevel: "DEBUG",

    browsers: [ 
      //"PhantomJS",
      "Chrome"],

    reporters: [
      "progress", 
      "karma-typescript"],

    singleRun: true
  };

  config.set(configuration);
};