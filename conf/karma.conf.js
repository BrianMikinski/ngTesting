/**
 * gulp.js task configuration file for the karma test runner
 */
//const conf = require('./gulp.conf');

// input: "src/scripts/**/*.ts",
// output:"wwwroot/scripts",
// config: "tsconfig.json"

module.exports = function (config) {
  const configuration = {
    frameworks: [
      "jasmine",
      "karma-typescript" ],

    files: [
      {pattern: "../src/scripts/**/*.ts"}],

    preprocessors:{
      "**/*.ts": ["karma-typescript"]
    },

    logLevel: "INFO",

    browsers: [
      "PhantomJS",
      "Chrome"],

    reporters: ["progress", 
    "karma-typescript"],

    singleRun: true,

  //   ,
  // typescriptPreprocessor:{
  //       options:{
  //         sourceMap: true,
  //         noResolve: false
  //       },
  //       transformPath: function(path) {
  //         return path.replace(/\.ts$/, '.js');
  //       }
  //   }
  };

  config.set(configuration);
};