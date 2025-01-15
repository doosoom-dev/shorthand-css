# ✨ Shorthand CSS

**Shorthand CSS** is a lightweight utility library for expanding CSS shorthand properties into their full equivalent properties. It simplifies the process of working with CSS properties in JavaScript and makes handling shorthand styles more convenient. 🎨

---

## 🚀 Features

-   🔍 Expand CSS shorthand properties like `margin`, `padding`, `border`, etc., into their full forms.
-   🌳 Recursive handling of nested shorthand properties.
-   ⚡ Easy-to-use and lightweight.

---

## 📦 Installation

Install the library via npm:

```bash
npm install shorthand-css
```

--- 

## 🛠️ Usage
### Standard Expansion
Expand a shorthand property into its full equivalents:

```javascript
import ShorthandCSS from 'shorthand-css';

console.log(ShorthandCSS.expand('border'));
// Output: ['border-width', 'border-style', 'border-color']

console.log(ShorthandCSS.expand('color'));
// Output: ['color']
```

```javascript
console.log(cssShorthandProps.expand('border', '1px solid red'));
/*
Output: {
    "border-color": "red", 
    "border-style": "solid", 
    "border-width": "1px"
}
*/
```
## 📚 API

### `isShortHand(property: string): boolean`

Checks whether the given CSS property is a shorthand property.

- **`property`**: *(string)* The CSS property to check. Example: `'margin'`, `'padding'`, `'border'`, etc.

#### Returns:
- **`boolean`**: `true` if the property is a shorthand property, otherwise `false`.

### `expand(property: string, value?: string): string[] | expandProperties | undefined`

Expands a shorthand CSS property into its full equivalent properties.

- **`property`**: *(string)* The CSS property to expand. Example: `'margin'`, `'padding'`, `'border'`, etc.
- **`value`**: *(string, optional)* A space-separated string of values to apply to the expanded properties. If not provided, only the property names are returned. If provided, the values are assigned to each expanded property, with pixel units (`px`) automatically added for numeric values.

#### Returns:
- **`string[]`**: An array of the full equivalent properties for the given shorthand property if no `value` is provided.
- **`expandProperties`**: An object containing the expanded properties as keys, with their corresponding value from the `value` parameter.
- **`undefined`**: If the shorthand property is not recognized, or if the length of `value` doesn’t match the number of expanded properties.

## 🤝 Contributing

welcome contributions from the community to improve **shorthand-css**! 🎉

### How to Contribute

1. 🍴 Fork the repository.
2. 🌱 Create a new branch for your feature or fix.
3. 📝 Commit your changes.
4. 📤 Push your branch and submit a pull request.


## 📄 License
This library is licensed under the MIT License. 🆓

## 📨 Support & Feedback
🐛 Bug Reports: Submit an issue
🧑‍💻 Contributors: Check the repository
Built with ❤️ by doosoom-dev. ✨