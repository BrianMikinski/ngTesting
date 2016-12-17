// we have to import angular and the mocks libraries to test

import { IDemoController } from "./Demo/IDemoController";
import { IMathService } from "./Math/IMathService";
import { MathService } from "./Math/MathService";
import { IStringService } from "./String/IStringService";
import { StringService } from "./String/StringService";

/**
 * Demo for unit testing with jasmine
 */
describe("Test Jasmine Unit test", function ():void {

    beforeEach(angular.mock.module("app"));

    let DemoController: IDemoController, scope: ng.IScope;
    let mathService: IMathService, stringService: IStringService;

    let testTest: string = "hello world";

    beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {

        // scope = $rootScope.$new();
        // DemoController = <IDemoController>$controller('DemoController,', {
        //     $scope: scope,
        //     mathService: new MathService(),
        //     stringService: new StringService()
        // })

    }));

    // it('Test Demo Controller Integer Test', () => {
    //     expect(23).toEqual(DemoController.TestIntegerValue());
    // })

    it("Test Number 1", () => {
        expect(true).toEqual(true);
    });

    it("Test Number 2", () => {
        expect(4).not.toBe(5);
    });

    it("Match Pattern", () => {

        let message:string = "hello world";

        expect(message).toMatch("hello world");
        expect(message).not.toMatch("test");
    });

    it("Test number 3", () => {
        expect(7).toEqual(7);
        expect(9).not.toEqual(8);
    });

    it("Test number 4", () => {
        expect(9).toEqual(9);
    });

    it("Test number 6", () => {
         expect(9).toEqual(9);
    });
});