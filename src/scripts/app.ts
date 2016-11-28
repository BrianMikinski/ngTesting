/// <reference path="../../typings/index.d.ts"/>

/**
 * Demo app for unit testing angular and typescript modules
 */

var app = angular.module('app', []);

//Main controller for the page

//static $inject = ["$scope", "$document"];
app.controller("demoController", function () {

    var vm: any = this;
    
    vm.Message = "Hello World";

});