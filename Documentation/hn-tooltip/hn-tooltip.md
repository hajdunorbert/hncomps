# HNTooltip Component Documentation

`HNTooltip` is a JavaScript Web Component that provides customizable tooltips for HTML elements. Tooltips are small information boxes that appear when a user hovers over or clicks on an element. This component allows developers to easily add informative tooltips to enhance user experience.

## Installation

Include the `hn-comps.js` JavaScript file in your project. Since the `HNComps` are dynamically loading the script based on the components used.

## Features

`Customizable Styling`: The tooltip appearance can be customized through CSS styles.<br>
`Position Options`: Tooltips can be positioned at the top, right, bottom, or left of the target element.<br>
`Responsive Design`: The component adapts to different screen sizes, ensuring a consistent user experience.

## Usage

Add the `hn-tooltip` attribute to elements that require tooltips.<br>
The content of the tooltip is specified using the `hn-tooltip` attribute value.<br>
Additionally, you can use `hn-tooltip-top`, `hn-tooltip-bottom`, `hn-tooltip-right`, or `hn-tooltip-left` to specify the tooltip position.

```html
<!-- Example Usage -->
<button hn-tooltip="Click me to submit the form" hn-tooltip-top>Submit</button>
<input hn-tooltip="Enter your username" placeholder="Username" />
```

## Component Structure

Note: The structure will be generated dynamically

### HTML Structure

```html
<div class="hn-tooltip-container">
  <!-- Target element with hn-tooltip attribute -->
  <div class="hn-tooltip">
    <!-- Tooltip content specified in hn-tooltip attribute -->
  </div>
</div>
```

## Acknowledgments

The `HNTooltip` component is part of the `HNComps Library`, developed by `Hajdu Norbert`. Feel free to contribute or report issues on the `GitHub repository`.
