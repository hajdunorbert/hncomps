### Documentation for HNCard Component

# HNCard Component

The HNCard component is part of the HNComps library, providing a customizable card element for modern web interfaces.

## Installation

Include the HNCard JavaScript file in your project:

```html
<script src="path/to/hn-card.js"></script>
```

## Usage

To use the HNCard component, follow these simple steps:

```html
<hn-card width="400" border shadow rounded>
  <img
    slot="image"
    alt="Placeholder Image"
    src="https://placehold.co/600x400"
  />

  <b slot="title"> The Title </b>

  <p slot="content">Card content goes here.</p>
</hn-card>
```

## Example

![image](https://github.com/hajdunorbert/hncomps/assets/143267212/c769dc3e-1131-4ab9-be15-ad894b8f8803)

## Customization

The <hn-card> element supports the following attributes for customization:

`width`: Set the width of the card.

`border` : Add a border to the card.

`shadow` : Apply a box shadow to the card.

`rounded`: Add rounded corners to the card.

You can adjust these attributes to fit the visual style and layout requirements of your project.

## Acknowledgments

The `HNCard` component is part of the `HNComps Library`, developed by `Hajdu Norbert`. Contributions and issues can be reported on the `GitHub repository`.