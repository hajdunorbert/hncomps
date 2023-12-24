# HNPalette Library

HNPalette is a lightweight JavaScript library that provides a simple and customizable way to add color palettes to web components. With `hn-palette`, you can easily enhance the visual appeal of your components by specifying color palettes for various elements.

## Installation

Include the HNPalette JavaScript file in your project:

```html
<script src="path/to/hn-palette.js"></script>
```

## Usage

### Applying Palettes

The `HNPalette` library allows you to apply color palettes to HTML elements using the `hn-palette` attribute.
Simply add the `hn-palette` attribute to any HTML element to specify the desired color palette.

```html
<!-- Apply palette to a div -->
<div hn-palette="blue">This is a blue div</div>

<!-- Apply palette to a paragraph -->
<p hn-palette="green">This is a green paragraph</p>

<!-- Apply palette to a list item -->
<li hn-palette="red">Red List Item</li>
```

## Hover Effect

You can add a hover effect to elements by including the `hover` attribute along with the `hn-palette` attribute.

```html
<!-- Apply palette with hover effect to a button -->
<button hn-palette="orange" hover>Hover Me</button>

<!-- Apply palette with hover effect to a link -->
<a hn-palette="purple" hover>Hover Link</a>
```

### Supported Palettes

The following color palettes are supported out of the box:

`blue`
`red`
`green`
`orange`
`purple`
`teal`

You can also use custom color values by specifying a hexadecimal color code:

```html
<div hn-palette="#ff5733">Custom Color</div>
```
