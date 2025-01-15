# ✨ Shorthand CSS

## 📚 API

### `isShortHand(property: string): boolean`

Checks whether the given CSS property is a shorthand property.

- **`property`**: *(string)* The CSS property to check. Example: `'margin'`, `'padding'`, `'border'`, etc.

#### Returns:
- **`boolean`**: `true` if the property is a shorthand property, otherwise `false`.

--- 

### `expand(property: string, value?: string): string[] | expandProperties | undefined`

Expands a shorthand CSS property into its full equivalent properties.

- **`property`**: *(string)* The CSS property to expand. Example: `'margin'`, `'padding'`, `'border'`, etc.
- **`value`**: *(string, optional)* A space-separated string of values to apply to the expanded properties. If not provided, only the property names are returned. If provided, the values are assigned to each expanded property, with pixel units (`px`) automatically added for numeric values.

#### Returns:
- **`string[]`**: An array of the full equivalent properties for the given shorthand property if no `value` is provided.
- **`expandProperties`**: An object containing the expanded properties as keys, with their corresponding value from the `value` parameter.
- **`undefined`**: If the shorthand property is not recognized, or if the length of `value` doesn’t match the number of expanded properties.

---

### `isValidProperty(property: string): boolean`

Checks if a given CSS property is valid by looking it up in the list of known properties.
- **`property`**: *(string)* The CSS property to expand. Example: `'margin'`, `'padding'`, `'border'`, etc.

#### Returns:
- **`boolean`**: `true` if the property is a valid property, otherwise `false`.
