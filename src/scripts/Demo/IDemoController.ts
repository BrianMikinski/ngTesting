/**
 * Interface for a controller that allows users 
 * to increment and concatenate strings
 */
export interface IDemoController {

    /**
     * Change the integer property value of the controller
     */
    ValueChanged(): void;

    /**
     * Concatenate two string values together
     */
    ConcatenateStrings(): void;

    /**
     * Should return the string value "23"
     */
    TestIntegerValue(): number;
}