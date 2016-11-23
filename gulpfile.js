/*
 * Main entry point for gulp.js
 */
'use strict'

/**
 * Load required npm packages
 */
var gulp = require("gulp"),
            ts = require("gulp-typescript"),
            sourceMaps = require("gulp-sourcemaps"),
            del = require("del");

/**
 *  Configure paths
 * */
var paths = {
    scripts: {
        compile:{
            input: "src/**/*.ts",
            output:"wwwroot/",
            config: "tsconfig.json"
        }
    }
};

var tsProject = ts.createProject(paths.scripts.compile.config,
                {
                    typescript: require("typescript")
                });

/**
 * Clean 
 */
gulp.task("cleanTypeScript", function(){
    return del([ paths.scripts.compile.output + "Scripts/**/*"])
});

/**
 * Compile TypeScript
 */
gulp.task('compileTypeScript', ['cleanTypeScript'], function(){

    return gulp.src(paths.scripts.compile.input)
            .pipe(sourceMaps.init())
            .pipe(tsProject())
            .js
            .pipe(sourceMaps.write('.'))
            .pipe(gulp.dest(paths.scripts.compile.output))
});