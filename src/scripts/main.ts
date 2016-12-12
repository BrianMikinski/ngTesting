//Configuring the AMD requirejs module loader
require.config({
    baseUrl: "./scripts", //Base bath where you can find all modules

    paths: {
        appModule: "app",
        demo: "./Demo/DemoController"
    }
});

require(["app"],
    function() {
        angular.bootstrap(document, ["app"]);
    }
);