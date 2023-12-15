### Documentation for HNRow Component

# HNRow Component

The HNRow component is part of the HNComps library, providing a flexible row layout element for modern web interfaces.

## Installation

Include the HNRow JavaScript file in your project:

```html
<script src="path/to/hn-row.js"></script>
```

## Usage

To use the HNRow component, follow these simple steps:

```html
<hn-row gap="20px" justify-content-evenly>
  <hn-col size="11">
    <div class="box">11</div>
  </hn-col>
  <hn-col size="1">
    <div class="box">1</div>
  </hn-col>
  <hn-col size="1">
    <div class="box">1</div>
  </hn-col>
  <hn-col size="3">
    <div class="box">3</div>
  </hn-col>
</hn-row>
```

## Example

![image](https://github.com/hajdunorbert/hncomps/assets/143267212/8cde5038-b25f-44d1-8fc2-553a0c223b71)

## Customization

The `<hn-row>` element supports the following attributes for customization:

`gap`: set the distance between the elements.

`justify-content-center` : Center-align columns within the row.

`justify-content-evenly` : Distribute columns evenly within the row.

`justify-content-between`: Space out columns evenly with space between them.

You can adjust these attributes to achieve the desired visual style and layout for your project.

## Components

The `<hn-row>` element works seamlessly with the `<hn-col>` element, allowing you to create responsive and dynamic layouts easily.
Customize column sizes using the size attribute within each `<hn-col>` element.

```html
<hn-row gap="20px" justify-content-evenly>
  <hn-col size="6">
    <div class="box">6</div>
  </hn-col>
  <hn-col size="6">
    <div class="box">6</div>
  </hn-col>
</hn-row>
```
