# HNComps Library

HNComps is a collection of customizable web components for modern interfaces.

## HNButton Component

The `HNButton` component provides a versatile button element with various color palettes.

## Installation

Include the HNButton JavaScript file in your project:

```html
<script src="path/to/hn-button.js"></script>
```

## Usage

To use the HNButton component, follow these simple steps:

```html
<hn-button palette="blue">Blue</hn-button>
<hn-button palette="red">Red</hn-button>
<hn-button palette="green">Green</hn-button>
<hn-button palette="orange">Orange</hn-button>
<hn-button palette="purple">Purple</hn-button>
<hn-button palette="teal">Teal</hn-button>
<hn-button palette="#ff5733">Custom Color</hn-button>
```

### Example

<button style="background-color: #3498db; color: #fff;">Blue</button>
<button style="background-color: #e74c3c; color: #fff;">Red</button>
<button style="background-color: #2ecc71; color: #fff;">Green</button>
<button style="background-color: #f39c12; color: #fff;">Orange</button>
<button style="background-color: #9b59b6; color: #fff;">Purple</button>
<button style="background-color: #008080; color: #fff;">Teal</button>
<button style="background-color: #ff5733; color: #fff;">Custom Color</button>

## Customization

The `<hn-button>` element supports the following attributes for customization:

`palette`: Set the color palette for the button.
Available options include `blue`, `red`, `green`, `orange`, `purple`, and `teal`. You can also use `hex` color values for custom colors.

`border`: Add a border to the button.

`shadow`: Apply a box shadow to the button.

`rounded`: Add rounded corners to the button.
