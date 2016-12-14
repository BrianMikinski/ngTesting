/**
 * Demo app for unit testing angularjs typscript applications
 * 
 * @author Brian Mikinski - TomMikinley on GitHub
 * @version 1.0
 * @see README.md for more information on building, testing and the project in general
 */

import {DemoController} from "./Demo/DemoController";
import {MathService} from "./Math/MathService";
import {StringService} from "./String/StringService";

//Hackish fix for getting around global module definitions vs
//local module definitions
import * as __angular  from "angular";

declare global {
  const angular: typeof __angular;
}

var app = angular.module('app', ['ngRoute']);

app.controller('demoController', DemoController);

app.service("stringService", StringService);
app.service('mathService', MathService);