// //Configuring the AMD requirejs module loader
require.config({
    baseUrl: "./",

    // paths: {
    //     app:"app",
    //     appTests:"app.spec"
    // }
});

require(["app", 
         "appTests"],
    function(){
        angular.bootstrap(document,["app"]);
    }
);