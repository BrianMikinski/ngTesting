//Configuring the AMD requirejs module loader
require.config({
    baseUrl: "./scripts", //Base bath where you can find all modules

    paths: {
        appModule: "app",
        demo: "./Demo/DemoController",
        stringService: "./String/StringService",
        mathService: "./Math/MathService"
    }
});

require(["appModule", "demo", "stringService", "mathService"],
    function() {
        angular.bootstrap(document, ["app"]);
    }
);