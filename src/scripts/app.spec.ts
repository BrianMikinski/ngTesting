/// <reference path="../../typings/index.d.ts"/>

/**
 * Demo for unit testing with jasmine
 */
describe("Test Jasmine Unit test", function() {

    it('Test Number 1', () => {
        expect(true).toEqual(true);
    });

    it('Test Number 2', () => {
        expect(4).not.toBe(5);
    });

    it('Match Pattern', () => {
        
        let message = "hello world";

        expect(message).toMatch("hello world");
        expect(message).not.toMatch("test");
    });

    it('Test Number 3', () => {
        expect(7).toEqual(7);
        expect(9).not.toEqual(8);
    });

    it('Test Number 4', () => {
        expect(9).toEqual(9);
    });

});