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

// hackish fix for getting around global module definitions
// local module definitions
import * as __angular  from "angular";

declare global {
  const angular: typeof __angular;
}

/**
 * Main module for the application. We are exporting
 * the module so that it can be used in unit tests;
 */
let app:ng.IModule = angular.module("app", ["ngRoute"]);
app.controller("demoController", DemoController);

app.service("stringService", StringService);
app.service("mathService", MathService);

// export the default app modules so that we can reference it in unit tests
export default app;