var allTestFiles: any = [];
var TEST_REGEXP:any = /(spec|test)\.js$/i;

var pathToModule:any = function (path:any):any {
    return path.replace(/^\/base\//, "").replace(/\.js$/, "");
};

Object.keys((<any>window).__karma__.files).forEach(function (file):void {
    if (TEST_REGEXP.test(file)) {
        // normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});

// configuring the AMD requirejs module loader
require.config({
    // baseUrl: "../wwwroot/scripts/", //Base bath where you can find all modules
    baseUrl: "/base",
    paths: {
        appModule: "app",
        demo: "Demo/DemoController",
        stringService: "String/StringService",
        mathService: "Math/MathService"
    },
    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: (<any>window).__karma__.start
});