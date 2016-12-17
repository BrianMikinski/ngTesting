
import {IMathService} from "./IMathService";
// import * as angular from "angular";

/**
 * Math Service
 * 
 * Used to demo mocking angular services
 * @interface IMathService
 */
export class MathService implements IMathService {
    Increment(baseNumber: number): number {
        return ++baseNumber;
    }

    Decrement(baseNumber: number): number {
        return --baseNumber;
    }
}