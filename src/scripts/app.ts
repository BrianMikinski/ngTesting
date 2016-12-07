/**
 * Demo app for unit testing angularjs typscript applications
 * 
 * @author Brian Mikinski - TomMikinley on GitHub
 * @version 1.0
 * @see README.md for more information on building, testing and the project in general
 */

var app = angular.module('app', []);



interface IDemoController {
    ValueChanged():void;
     ConcatenateStrings():void;
}

/**
 * Demo Controller
 * Used to demo unit testing angular applications
 */
class DemoController implements IDemoController {

    Message:string  = "Hello World";

    baseNumber: number = null;
    IncrementedValue: number = null;
    DecrementedValue: number = null;

    StringOne: string = "";
    StringTwo: string = "";

    ConcatenatedString:string  = "";

    static $inject: Array<string> = ['$scope', 'mathService', 'stringService'];
    constructor(private $scope: ng.IScope, private mathService: IMathService, private stringService: IStringService){ }

    ValueChanged():void {
        if (this.baseNumber !== null)  {
            this.IncrementedValue = this.mathService.Increment(this.baseNumber);
            this.DecrementedValue = this.mathService.Decrement(this.baseNumber);
        } else {
            this.IncrementedValue = null;
            this.DecrementedValue = null;
        }
    };

     ConcatenateStrings():void {
        this.ConcatenatedString = this.stringService.Concat(this.StringOne, this.StringTwo);
    }
}

app.controller('demoController', DemoController);

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
   
    static $inject: Array<string> = ['$http'];
    constructor( private $http: ng.IHttpService ) { }

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