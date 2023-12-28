# HNColorPicker Component Documentation

`HNColorPicker` is a JavaScript Web Component that provides a user-friendly color picker with real-time updates.<br>
This component allows users to select a color using the input type color, and it dynamically displays the selected color along with its hexadecimal value.

## Installation

Include the `hn-comps.js` JavaScript file in your project. Since the `HNComps` are dynamically loading the script based on the components used.

## Features

`Real-time Color Preview`: The color picker displays the selected color in real-time within the component.<br>
`Hexadecimal Value Display`: The hexadecimal value of the selected color is shown below the color preview.

## Usage

```html
<style>
  hn-color-picker {
    width: 600px;
    height: 500px;
    font-size: 2rem;
  }
</style>

<hn-color-picker></hn-color-picker>
```

## Component Structure

### HTML Structure

```html
<div class="base">
  <div class="colorContainer">
    <div class="textContainer">
      <!-- Hexadecimal value of the selected color -->
    </div>
  </div>
  <div class="colorPicker">
    <!-- Input element for color selection -->
  </div>
</div>
```

### CSS Styles

```css
:host {
  display: inline-block;
}

.base {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.colorContainer {
  border: 2px solid rgb(73, 68, 68);
  width: 100%;
  height: 100%;
  margin-bottom: 5px;
  background-color: #ffffff; /* Initial color */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease;
}

.textContainer {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
}
```

## Acknowledgments

The `HNColorPicker` component is part of the `HNComps Library`, developed by `Hajdu Norbert`. Feel free to contribute or report issues on the `GitHub repository`.
