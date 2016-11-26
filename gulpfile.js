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

/**
 *  Configure paths
 * */
var paths = {
    scripts: {
        compile:{
            input: "src/scripts/**/*.ts",
            output:"wwwroot/scripts",
            config: "tsconfig.json"
        }
    }
};

/**
 * Setup the Gulp TypeScript Compilation
 */
var tsProject = ts.createProject(paths.scripts.compile.config,
                {
                    typescript: require("typescript")
                });

/**
 * Clean TypeScript
 */
gulp.task("clean:TypeScript", function() {
    return del([ paths.scripts.compile.output + "Scripts/**/*"])
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