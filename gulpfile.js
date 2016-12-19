/*
 * Main entry point for gulp.js
 */
'use strict'

/**
 * Load required npm packages
 */
var gulp = require("gulp");
var ts = require("gulp-typescript");
var sourceMaps = require("gulp-sourcemaps");
var del = require("del");
var karmaServer = require("karma").Server;

/**
 *  Configure paths
 * */
var paths = {
    scripts: {
        compile:{
            input: "src/scripts/**/*.ts",
            output:"wwwroot/scripts",
            tests: "wwwrootTests/",
            config: "tsconfig.json"
        }
    },
    karma: "karma.conf.js"
};

/**
 * Setup the Gulp TypeScript Compilation
 */
var tsProject = ts.createProject(paths.scripts.compile.config, {
                    typescript: require("typescript")
                });

/**
 * Clean TypeScript
 */
gulp.task("clean:TypeScript", function() {
    return del([ paths.scripts.compile.output + "**/*"])
});

/**
 * Compile TypeScript
 */
gulp.task("build:compileTypeScript", ["clean:TypeScript"], function() {

    return gulp.src(paths.scripts.compile.input)
            .pipe(sourceMaps.init())
            .pipe(tsProject())
            .js
            .pipe(sourceMaps.write("."))
            .pipe(gulp.dest(paths.scripts.compile.output))
});

/**
 * Add a watch to compile scripts
*/
gulp.task("watch", function() {
    gulp.watch(paths.scripts.compile.input,["build:compileTypeScript"]); //No callback
});

/**
 * Run test once and exit
 */
gulp.task("test", ["build:compileTypeScript"], function (done) {

  new karmaServer({
    configFile:  __dirname + "/conf/karma.conf.js",
    singleRun: true
  }, function(){
       // error = error ? new Error('Karma returned with the error code: ' + error) : undefined;
    done();
  }).start();
});