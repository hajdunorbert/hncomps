# HNSignature Component Documentation

`HNSignature` is a JavaScript Web Component that provides a signature pad for users to draw or input their signatures. This component allows developers to easily integrate signature functionality into their applications.

## Installation

Include the `hn-comps.js` JavaScript file in your project. Since the `HNComps` are dynamically loading the script based on the components used.

## Features

`Signature Drawing`: Users can draw their signatures on the canvas using the mouse or touch input.<br>
`Clear Signature`: The component includes a button to clear the current signature.<br>
`Signature Image`: The signature image in PNG format can be accessed and used externally.

## Usage

Add the `hn-signature` attribute to elements that require signature functionality.

```html
<!-- Example Usage -->
<div hn-signature></div>
```

## Component Structure

Note: The structure will be generated dynamically

### HTML Structure

```html
<div class="hn-signature-container">
  <!-- Canvas for signature drawing -->
  <canvas id="signatureCanvas" class="hn-signature-canvas"></canvas>
  <!-- Clear signature button -->
  <button id="clearButton" class="hn-signature-clear-button">
    Clear Signature
  </button>
</div>
```

## JavaScript API

The signature image in PNG format can be accessed from the outside. Example:

```javascript
// Access the signature image from the outside
console.log(hnSignatureImage);
```

## Acknowledgments

The `HNSignature` component is part of the `HNComps Library`, developed by `Hajdu Norbert`. Feel free to contribute or report issues on the `GitHub repository`.
