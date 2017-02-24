'use strict';

/**
 * gulp.js task configuration file for the karma test runner
 */
module.exports = function (config) {
  const configuration = {
    basePath: "../wwwroot/scripts/", // this is the default path where you are able to find all spec files
    logLevel: "INFO", //use "DEBUG" for troubleshooting
    browserNoActivityTimeout: 10000,

    frameworks: [
      "jasmine"], //Do not use karma-requirejs plugin framework

    // When using a module loader such as requirejs, the order of the files matters.
    // You also must be certain to only include a file once - i.e.
    // you cannot load a module using requirejs as well as include
    // it using the pattern matcher or specifically specified.
    files: [

      // do not use minified versions of libraries here. They will fail the test. 
      "../../bower_components/angular/angular.js",
      "../../bower_components/angular-route/angular-route.js",
      "../../bower_components/angular-mocks/angular-mocks.js",
      "../../bower_components/requirejs/require.js",
      '../../node_modules/karma-requirejs/lib/adapter.js',
      {pattern: "app.js", included: false},
      { pattern: "*.js", included: false },
      { pattern: "**/*.js", included: false },
      { pattern: "**/*.spec.js", included: false },
      { pattern: "*.spec.js", included: false },
      { pattern: '**/*.js.map', included: false},
      "main.specs.js"], // requirejs main file. This file computes module dependencies for the application

    exclude: [ "main.js" ] , // you always want to exclude the app main.js

    browsers: [
      //"PhantomJS", //PhantomJS does not support es6. Support is planned for release 2.5
      "Chrome",
      //"IE",
      "Firefox"],

    reporters: [
      "progress",
      "coverage"],

    preprocessors: {
       "*.js": ['coverage'],
      "**/*.js": ['coverage']
    },

    coverageReporter: {
      type :"html",
      dir : "../../testCoverage"
    },

    singleRun: false,
  };

  config.set(configuration);
};