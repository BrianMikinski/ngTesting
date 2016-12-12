import {IDemoController} from "./IDemoController";
import {IMathService} from "../Math/IMathService";
import {IStringService} from "../String/IStringService";
import * as angular from "angular";

/**
 * Demo Controller
 * Used to demo unit testing angular applications
 */
export class DemoController implements IDemoController {

    Message: string = "Hello World";

    baseNumber: number = null;
    IncrementedValue: number = null;
    DecrementedValue: number = null;

    StringOne: string = "";
    StringTwo: string = "";

    ConcatenatedString: string = "";

    static $inject: Array<string> = ['$scope', 'mathService', 'stringService'];
    constructor(private $scope: ng.IScope, private mathService: IMathService, private stringService: IStringService) { }

    ValueChanged(): void {
        if (this.baseNumber !== null) {
            this.IncrementedValue = this.mathService.Increment(this.baseNumber);
            this.DecrementedValue = this.mathService.Decrement(this.baseNumber);
        } else {
            this.IncrementedValue = null;
            this.DecrementedValue = null;
        }
    };

    ConcatenateStrings(): void {
        this.ConcatenatedString = this.stringService.Concat(this.StringOne, this.StringTwo);
    }

    TestIntegerValue(): number {
        return 23;
    }
}

angular.module("app").controller('demoController', DemoController);

//app.controller('demoController', DemoController);