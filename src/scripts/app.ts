/**
 * Demo app for unit testing angularjs typscript applications
 * 
 * @author Brian Mikinski - TomMikinley on GitHub
 * @version 1.0
 * @see README.md for more information on building, testing and the project in general
 */

var app = angular.module('app', []);

/**
 * Demo Controller
 * Used to demo unit testing angular applications
 */
app.controller("demoController", function ($scope: ng.IScope, mathService: IMathService, stringService: IStringService) {

    var vm: any = this;

    vm.Message = "Hello World";

    vm.baseNumber = null;
    vm.IncrementedValue = null;
    vm.DecrementedValue = null;

    vm.StringOne = "";
    vm.StringTwo = "";

    vm.ConcatenatedString = "";

    vm.ValueChanged = (): void => {
        if (vm.baseNumber !== null)  {
            vm.IncrementedValue = mathService.Increment(vm.baseNumber);
            vm.DecrementedValue = mathService.Decrement(vm.baseNumber);
        } else {
            vm.IncrementedValue = null;
            vm.DecrementedValue = null;
        }
    };

    vm.ConcatenateStrings = (): void => {
        vm.ConcatenatedString = stringService.Concat(vm.StringOne, vm.StringTwo);
    }
});

interface IMathService {
    Increment(baseNumber: number): number;
    Decrement(baseNumber: number): number;
}

/**
 * Math Service
 * 
 * Used to demo mocking angular services
 * @interface IMathService
 */
class MathService implements IMathService {
    constructor() { }

    Increment(baseNumber: number): number {
        return ++baseNumber;
    }

    Decrement(baseNumber: number): number {
        return --baseNumber;
    }
}

app.service('mathService', MathService);


interface IStringService {
    Concat(firstString: string, secondString: string): string
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
    public Concat(firstString: string, secondString: string): string {
        return firstString + secondString;
    }
}

app.service("stringService", StringService);