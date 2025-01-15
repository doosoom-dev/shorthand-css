import ShorthandCSS from "../index";

describe('isShortHand', () => {
    it('unknown properties returns false', () => {
        expect(ShorthandCSS.isShortHand('')).toBe(false);
        expect(ShorthandCSS.isShortHand('Hello World')).toBe(false);
    });

    it('existing and shorthand properties returns true', () => {
        expect(ShorthandCSS.isShortHand('border')).toBe(true);
        expect(ShorthandCSS.isShortHand('background')).toBe(true);
    });

    it('not shorthand properties return false', () => {
        expect(ShorthandCSS.isShortHand('image')).toBe(false);
        expect(ShorthandCSS.isShortHand('color')).toBe(false);
    });
});

describe('expand', () => {
    it('unknown properties returns undefined', () => {
        expect(ShorthandCSS.expand('')).toBe(undefined);
        expect(ShorthandCSS.expand('Hello World')).toBe(undefined);
    });

    it('If the property exists and no value is specified, only the longhands value is returned.', () => {
        expect(ShorthandCSS.expand('border')).toStrictEqual(['-width', '-style', '-color']);
        expect(ShorthandCSS.expand('mask-border')).toStrictEqual(['-mode', '-outset', '-repeat', '-slice', '-source', '-width']);
    });

    it('If the property exists and has a value, returns a map with the expanded properties.', () => {
        expect(ShorthandCSS.expand('border', '1px solid red')).toStrictEqual({"border-color": "red", "border-style": "solid", "border-width": "1px"});
        expect(ShorthandCSS.expand('margin', '10 20 40 20')).toStrictEqual( {"margin-bottom": "40px", "margin-left": "20px", "margin-right": "20px", "margin-top": "10px"});
        expect(ShorthandCSS.expand('place-content', 'end space-between')).toStrictEqual({"align-content": "end", "justify-content": "space-between"})
    });
});