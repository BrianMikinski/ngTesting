/**
 * interface that allows users to increment and decrement numeric values
 */
export interface IMathService {

    /**
     * Increment the baseNumber by 1
     */
    Increment(baseNumber: number): number;

    /**
     * Decrement the base controller by 1
     */
    Decrement(baseNumber: number): number;
}