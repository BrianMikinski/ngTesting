import {IStringService} from "./IStringService";
// import * as angular from "angular";

/**
 * String Service
 * 
 * Used to demo mocking angular services
 * 
 * @interface IStringService
 */
export class StringService implements IStringService {

    //static $inject: Array<string> = ['$http'];
    constructor( /*private $http: ng.IHttpService*/) { }

    public Concat(firstString: string, secondString: string): string {
        return firstString + secondString;
    }
}