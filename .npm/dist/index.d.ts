type expandProperties = {
    [key: string]: string;
};
export default class ShorthandCSS {
    /**
     * Checks whether the given CSS property is a shorthand property.
     *
     * @param property The CSS property name to check
     * @returns True if the property is a shorthand property, otherwise false
     */
    static isShortHand(property: string): boolean;
    /**
     * Expands a shorthand CSS property into its individual properties.
     *
     * @param property The shorthand property name to expand
     * @param value (Optional) The value to apply to the expanded properties
     * @returns An array of expanded properties or an object with property-value pairs, or undefined
     *
     * This function returns the individual expanded properties for the given shorthand property.
     * If a value is provided, it assigns those values to each expanded property accordingly.
     */
    static expand(property: string, value?: string): string[] | expandProperties | undefined;
}
export {};
