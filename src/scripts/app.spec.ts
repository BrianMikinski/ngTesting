// we have to import angular and the mocks libraries to test

import { IDemoController } from "./Demo/IDemoController";
import { MathService } from "./Math/MathService";
import { StringService } from "./String/StringService";
import app from "./app";

/**
 * Demo for unit testing with jasmine
 */
describe(`Module "${app.name}": Unit Tests`, function (): void {

    // arrange
    beforeEach(angular.mock.module("app"));

    let DemoController: IDemoController, scope: ng.IScope;

    beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {

        scope = $rootScope.$new();

        DemoController = <IDemoController>$controller("DemoController", {
            $scope: scope,
            mathService: new MathService(),
            stringService: new StringService()
        });
    }));

    it("DemoController: TestIntegerValue", () => {
        // act, assert
        expect(23).toEqual(DemoController.TestIntegerValue());
    });

    it("DemoController: ConcatenateStrings", () => {

        // arrange
        (<any>DemoController).StringOne = "test";
        (<any>DemoController).StringTwo = "newtest";

        // act
        DemoController.ConcatenateStrings();
        
        // assert
        expect((<any>DemoController).ConcatenatedString).toEqual("testnewtest");
    });

});