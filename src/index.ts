type expandProperties = {
    [key: string]: string 
}
type ShorthandProperties = {
    [key: string]: string[] // 각 shorthand 속성에 대한 확장된 속성 배열
}

const shortHandProperties: ShorthandProperties = {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/animation
    animation: ['-name', '-duration', '-timing-function', '-delay', '-iteration-count', '-fill-mode', '-play-state', '-direction'],
    'animation-range': ['-start', '-end'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/background
    background: ['-image', '-position', '-size', '-repeat', '-origin', '-clip', '-attachment', '-color'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/border
    border: ['-width', '-style', '-color'],
    'border-width': ['border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width'],
    'border-style': ['border-top-style', 'border-right-style', 'border-bottom-style', 'border-left-style'],
    'border-color': ['border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color'],
    'border-block': ['-width', '-style', '-color'],
    'border-block-end': ['-width', '-style', '-color'],
    'border-block-start': ['-width', '-style', '-color'],
    'border-bottom': ['-width', '-style', '-color'],
    'border-image': ['-source', '-slice', '-width', '-outset', '-repeat'],
    'border-inline': ['-width', '-style', '-color'],
    'border-inilne-end': ['-width', '-style', '-color'],
    'border-inilne-start': ['-width', '-style', '-color'],
    'border-left': ['-width', '-style', '-color'],
    'border-radius': ['border-top-left-radius', 'border-top-right-radius', 'border-bottom-right-radius', 'border-bottom-left-radius'],
    'border-right': ['-width', '-style', '-color'],
    'border-top': ['-width', '-style', '-color'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/columns
    'column-rule': ['-width', '-style', '-color'],
    columns: ['column-width', 'column-count'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/contain-intrinsic-size
    'contain-intrinsic-size': ['contain-intrinsic-width', 'contain-intrinsic-height'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/container
    container: ['-name', '-type'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/flex
    flex: ['-grow', '-shrink', '-basis'],
    'flex-flow': ['flex-direction', 'flex-wrap'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/font
    font: ['-style', '-variant', '-weight', '-stretch', '-size', 'line-height', '-family'],
    'font-synthesis': ['-weight', '-style', '-small-caps', '-position'],
    'font-variant': ['-alternates', '-caps', '-east-asian', '-emoji', '-ligatures', '-numeric', '-position'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/gap
    gap: ['column-gap', 'row-gap'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/grid
    grid: ['-template-rows', '-template-columns', '-template-areas', '-auto-rows', '-auto-columns', '-auto-flow', '-column-gap', '-row-gap', 'column-gap', 'row-gap'],
    'grid-area': ['grid-row-start', 'grid-column-start', 'grid-row-end', 'grid-column-end'],
    'grid-column': ['-start', '-end'],
    'grid-row': ['-start', '-end'],
    'grid-template': ['-columns', '-rows', '-areas'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/inset
    inset: ['top', 'bottom', 'left', 'right'],
    'inset-block': ['-start', '-end'],
    'inset-inline': ['-start', '-end'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/list-style
    'list-style': ['-type', '-position', '-image'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/margin
    margin: ['-top', '-right', '-bottom', '-left'],
    'margin-block': ['-start', '-end'],
    'margin-inline': ['-start', '-end'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/mask
    mask: ['-image', '-mode', '-repeat', '-position', '-clip', '-origin', '-size', '-composite'],
    'mask-border': ['-mode', '-outset', '-repeat', '-slice', '-source', '-width'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/offset
    offset: ['-position', '-path', '-distance', '-anchor', '-rotate'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/outline
    outline: ['-width', '-style', '-color'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
    overflow: ['-x', '-y'],
    'overscroll-behavior': ['-x', '-y'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/padding
    padding: ['-top', '-right', '-bottom', '-left'],
    'padding-block': ['-start', '-end'],
    'padding-inline': ['-start', '-end'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/place-content
    'place-content': ['align-content', 'justify-content'],
    'place-items': ['align-items', 'justify-items'],
    'place-self': ['align-self', 'justify-self'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/position-try
    'position-try': ['-fallbacks', '-order'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin
    'scroll-margin': ['-top', '-right', '-bottom', '-left'],
    'scroll-margin-block': ['-start', '-end'],
    'scroll-margin-inline': ['-start', '-end'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding
    'scroll-padding': ['-top', '-right', '-bottom', '-left'],
    'scroll-padding-block': ['-start', '-end'],
    'scroll-padding-inline': ['-start', '-end'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-timeline
    'scroll-timeline': ['-name', '-axis'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration
    'text-decoration': ['-line', '-style', '-color', '-thickness'],
    'text-emphasis': ['-style', '-color'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap
    'text-wrap': ['-mode', '-style'],

    // https://developer.mozilla.org/en-US/docs/Web/CSS/transition
    transition: ['-delay', '-duration', '-property', '-timing-function', '-behavior'],

    'view-timeline': ['-name', '-axis'],
}

export default class ShorthandCSS {
   /**
     * Checks whether the given CSS property is a shorthand property.
     * 
     * @param property The CSS property name to check
     * @returns True if the property is a shorthand property, otherwise false
     */
    static isShortHand(property: string): boolean {
        const expanded = shortHandProperties[property];

        if (!expanded) return false;

        return true;
    }

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
    static expand(property: string, value: string = ""): string[] | expandProperties | undefined {
        const expanded = shortHandProperties[property];

        if (!expanded) return undefined;

        if (value === "") {
            return expanded;
        } else {
            const values = value.split(" ").map(v => isNaN(Number(v)) ? v : v+'px');
            
            if (values.length !== expanded.length) return undefined;

            const ret: expandProperties = {};

            expanded.map((p, i) => {
                if (p.startsWith("-")) {
                    return ret[property + p] = values[i]
                }
                return ret[p] = values[i];
            })
            return ret;
        }
    }   
}