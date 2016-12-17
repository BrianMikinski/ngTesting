
/**
 * interface that allows users to concatenate two separate strings
 */
export interface IStringService {

    /**
     * concatenate to strings
     * @param firstString the first of two strings that are being concatenated together
     * @param secondString the second of two strings that are being concatenated together
     */
    Concat(firstString: string, secondString: string): string;
}