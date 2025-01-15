import { allProperties, shortHandProperties } from "./properties";
import { expandProperties } from "./types";

export default class ShorthandCSS {
    /**
     * Checks whether the given CSS property is a shorthand property.
     *
     * @param property The CSS property name to check
     * @returns True if the property is a shorthand property, otherwise false
     */
    static isShortHand(property: string): boolean {
        return !!shortHandProperties[property];
    }

    /**
     * Checks if a given CSS property is valid by looking it up in the list of known properties.
     *
     * @param property - The CSS property to check.
     * @returns True if the property exists in the list of known properties, otherwise false.
     */
    static isValidProperty(property: string): boolean {
        return allProperties.some(item => item.property === property);
    }

    /**
     * Expands a shorthand CSS property into its individual properties.
     *
     * @param property The shorthand property name to expand. Example: `'border'`, `'padding'`, etc.
     * @param value (Optional) A space-separated string of values to apply to the expanded properties.
     * If no value is provided, the function returns the expanded property names only.
     * 
     * @returns 
     * - **`string[]`**: An array of expanded property names if no `value` is provided.
     * - **`expandProperties`**: An object containing expanded properties as keys, with each corresponding value from the `value` parameter.
     * - **`undefined`**: If no shorthand property is found for the provided `property`, or if the `value` parameter doesn't match the length of expanded properties.
     *
     * This function expands a shorthand property like `border` into its full equivalents such as `border-width`, `border-style`, `border-color`.
     * If a value is provided, it will assign those values to each expanded property accordingly, with a fallback to pixel (`px`) units for numerical values.
     */
    static expand(property: string, value: string = ''): string[] | expandProperties | undefined {
        const expanded = shortHandProperties[property]

        if (!expanded) return undefined

        if (value === '') {
            const ret: string[] = expanded.map((p) => {
                return property + p
            })
            return ret
        } else {
            const ret: expandProperties = {}
            const values = value.split(' ').map((v) => (isNaN(Number(v)) ? v : v + 'px'))
            if (values.length !== expanded.length) return undefined
            expanded.map((p, i) => {
                if (p.startsWith('-')) {
                    return (ret[property + p] = values[i])
                }
                return (ret[p] = values[i])
            })
            return ret
        }
    }

    /**
     * A function that returns the last referenced CSS version.
     * 
     * @returns Last referenced css version
     */
    static lastUpdated(){
        return `CSS Text Module Level 4`
    }
}
