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
      "jasmine"
      // ,
      // "karma-typescript" 
      ],

    files: [
      {pattern: "../src/scripts/**/*.spec.js"}//,
      // {pattern: "../src/scripts/**/*.js.map"}
      ],

    // preprocessors:{
    //   "**/*.ts": ["karma-typescript"]
    // },

    logLevel: "DEBUG",

    browsers: [
      //"PhantomJS",
      "Chrome"],

    reporters: ["progress"
    // , 
    // "karma-typescript"
    ],

    singleRun: true//,
          // Uncomment below if you want the default html
      // coverage report + a summary on the console
      
      // karmaTypescriptConfig: {
      //     reports:
      //     {
      //         "html": "coverage",
      //         "text-summary": "" // destination "" will redirect output to the console
      //     }
      // },
        
  };

  config.set(configuration);
};