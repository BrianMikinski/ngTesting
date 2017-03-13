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
            outputTests: "wwwrootTest/scripts",
            config: "tsconfig.json"
        },
    testResults: "testResults"
    },
    karma: "karma.conf.js",
    html:{
        input: "src/**/*.html",
    },
    wwwroot: "wwwroot",
    wwwrootTest: "wwwrootTest"
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
    return del([ paths.wwwroot + "**/*",
                paths.testResults + "**/*",
                paths.wwwrootTest + "**/*" ])
});

/**
 * Copy HTML to source folder
 */
gulp.task("copy:html", function() {
    return gulp.src(paths.html.input)
                .pipe(gulp.dest(paths.wwwroot))
                .pipe(gulp.dest(paths.wwwrootTest));
});

/**
 * Compile TypeScript
 */
gulp.task("build:compileTypeScript", ["copy:html"], function() {

    return gulp.src(paths.scripts.compile.input)
            .pipe(sourceMaps.init())
            .pipe(tsProject())
            .js
            .pipe(sourceMaps.write("."))
            .pipe(gulp.dest(paths.scripts.compile.output))
            .pipe(gulp.dest(paths.scripts.compile.outputTests));
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