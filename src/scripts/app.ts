/**
 * Demo app for unit testing angular and typescript modules
 */

//import * as angular from '@types/angular'

let testingVar:string = "hello world";

let testAgain:ng.IScope;

let testMaybe: ng.IRootScopeService;

//let testingTest: ng.

var app = angular.module('app', []);

//static $inject = ["$scope", "$document"];
app.controller("demoController", function () {

    var vm: any = this;
    
    vm.Message = "Hello World";

});

let numberTest: number = 5;