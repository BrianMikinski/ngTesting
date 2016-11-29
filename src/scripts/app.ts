/**
 * Demo app for unit testing angular typscript applications
 * 
 * @author Brian Mikinski - aka TomMikinley on GitHub
 * @version 1.0
 * @see README.md for more information on building, testing and the project in general
 */

var app = angular.module('app', []);

/**
 * Demo Controller
 * Used to demo unit testing angular applications
 */
app.controller("demoController", function ($scope:ng.IScope, mathService:any, stringService: IStringService) {

    var vm: any = this;
    
    vm.Message = "Hello World";

    vm.baseNumber = null;
    vm.IncrementedValue = null;
    vm.DecrementedValue = null;

    vm.StringOne = "";
    vm.StringTwo = "";

    vm.ConcatenatedString = "";
    
    vm.ValueChanged = (): void => {
        if (vm.baseNumber !== null) {
            vm.IncrementedValue = mathService.Increment(vm.baseNumber);
            vm.DecrementedValue = mathService.Decrement(vm.baseNumber);
        } else {
            vm.IncrementedValue = null;
            vm.DecrementedValue = null;
        }
    };

    vm.ConcatenateStrings =  (): void => {
        vm.ConcatenatedString = stringService.Concat(vm.StringOne, vm.StringTwo);
    }
});

/**
 * Math Service
 * Used to demo unit testing angular services
 */
app.service('mathService', function() {

    var vm: any = this;

    vm.Increment = function(baseNumber: number):number {
        return ++baseNumber;
    }

    vm.Decrement = function(baseNumber: number): number {
        return --baseNumber;
    }
});

interface IStringService {
    Concat(firstString:string, secondString:string): string
}

/**
 * String Service
 * 
 * Used to demo mocking angular services
 * 
 * @interface IStringService
 */
class StringService implements IStringService {

    //static $inject: Array<string> = ['$scope'];
    /// ToDo: Figure out how to do dependency injection
    constructor() { 
        //Do constructor logic here
    }

    /**
     * Concatenate two stringService
     * @param firstString The first string to Concatenate
     * @param secondString The second string to concatenate
     */
    public Concat(firstString:string, secondString:string): string {
        return firstString + secondString;
    }
}

app.service("stringService", StringService);