# HNStyle Component Documentation

`HNStyle` is a JavaScript library designed to simplify the process of applying custom styles to HTML elements by defining and using a configuration array.

With `hn-style`, you can easily enhance the appearance of your components by specifying custom styles for various attributes.

## Installation

Include the `hn-comps.js` JavaScript file in your project. Since the `HNComps` are dynamically loading the script based on the components used.

## Attributes

`full-width` - Gives an element `100% width`
`rounded` - Gives an element `Rounded Corners`
`shadow` - Gives an element `Shadow`
`border` - Gives an element `Border`
`text-centered` - Makes the `Text Centered`
`dropdown` - Applies styles to make an element a `dropdown container`.
`dropdown-content` - Styles for `dropdown content`.
`dropdown-item` - Styles for each `item in the dropdown`.

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

<!-- Apply dropdown style -->
<ul>
  <li dropdown>
    <button>This is a Dropdown Menu</button>
    <div dropdown-content>
      <a dropdown-item href="#">Dropdown Item 1</a>
      <a dropdown-item href="#">Dropdown Item 2</a>
      <a dropdown-item href="#">Dropdown Item 3</a>
    </div>
  </li>
</ul>
```

## Acknowledgments

The `HNStyle` component is part of the `HNComps Library`, developed by `Hajdu Norbert`. Feel free to contribute or report issues on the `GitHub repository`.
