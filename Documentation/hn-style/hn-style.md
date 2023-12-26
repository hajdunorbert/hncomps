# HNStyle Library

`HNStyle` is a JavaScript library designed to simplify the process of applying custom styles to HTML elements by defining and using a configuration array.

With `hn-style`, you can easily enhance the appearance of your components by specifying custom styles for various attributes.

## Installation

Include `the hn-comps.js` JavaScript file in your project. Since you are dynamically loading the script based on the components used.

## Configuration

Modify a configuration array called `HNStyleAttributes` to specify custom styles. Each configuration object in the array should include the following properties:

`attr`: The attribute that triggers the application of the style.
`className`: The class name to be added to elements with the specified attribute.
`style`: The CSS style rules to be applied when the class is added.

```javascript
const HNStyleAttributes = [
  {
    attr: "rounded",
    className: "hn-style-rounded",
    style: "border-radius: 5px;",
  },
  {
    attr: "shadow",
    className: "hn-style-shadow",
    style: "box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);",
  },
  {
    attr: "border",
    className: "hn-style-border",
    style: "border: 1px solid #ccc;",
  },
  {
    attr: "text-centered",
    className: "hn-style-text-centered",
    style: "text-align:center;",
  },
];
```

## Usage

### Applying Styles

Apply custom styles to HTML elements by adding the corresponding attributes specified in the `attr` property.

```html
<!-- Apply rounded style -->
<div rounded>This div has rounded corners</div>

<!-- Apply shadow style -->
<p shadow>This paragraph has a subtle shadow</p>

<!-- Apply border style -->
<li border>Border List Item</li>

<!-- Apply text-centered style -->
<span text-centered>This text is centered</span>
```

## Acknowledgments

The `HNStyle` component is part of the `HNComps Library`, developed by `Hajdu Norbert`. Feel free to contribute or report issues on the `GitHub repository`.
