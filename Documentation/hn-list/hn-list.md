# Documentation for HNList Component

## HNList Component

The HNList component is part of the HNComps library, providing a versatile list element with various view options.

### Installation

Include the HNList JavaScript file in your project:

```html
<script src="path/to/hn-list.js"></script>
```

## Usage

To use the HNList component, follow these steps:

```html
<!-- List View -->
<hn-list view="list" items='["Item 1", "Item 2", "Item 3"]'></hn-list>

<!-- Grid View -->
<hn-list view="grid" items='["Item 1", "Item 2", "Item 3"]'></hn-list>

<!-- Card View -->
<hn-list view="card" items='["Item 1", "Item 2", "Item 3"]'></hn-list>

<!-- Compact View -->
<hn-list view="compact" items='["Item 1", "Item 2", "Item 3"]'></hn-list>

<!-- Thumbnail View -->
<hn-list
  view="thumbnail"
  items='[
    {"title": "Item 1", "image": "https://placehold.co/600x400"},
    {"title": "Item 2", "image": "https://placehold.co/600x400"},
    {"title": "Item 3", "image": "https://placehold.co/600x400"}
    ]'
></hn-list>

<!-- Table View -->
<hn-list
  view="table"
  items='[
    {"Name": "John", "Age": 30},
    {"Name": "Jane", "Age": 25},
    {"Name": "Bob", "Age": 40}]'
></hn-list>

<!-- Timeline View -->
<hn-list view="timeline" items='["Event 1", "Event 2", "Event 3"]'></hn-list>
```

## Customization

The `<hn-list>` element supports the following attributes for customization:

`view`: Specify the view style of the list (`list`, `grid`, `card`, `compact`, `thumbnail`, `table`, `timeline`).

`items`: Provide an array of items to be displayed in the list. Each item can be a string, object, or any valid content based on the chosen view.

You can tailor these attributes to suit the layout and presentation requirements of your project.

## Views

List View (`view="list"`)
The default view that displays items in a simple list format.

Grid View (`view="grid"`)
Organize items in a grid layout, allowing for a visually appealing presentation.

Card View (`view="card"`)
Present items as cards with borders, providing a card-like appearance.

Compact View (`view="compact"`)
A condensed view with minimal padding for each item.

Thumbnail View (`view="thumbnail"`)
Display items with an accompanying thumbnail image.

Table View (`view="table"`)
Present items in a table format, useful for structured data.

Timeline View (`view="timeline"`)
Show items in a timeline, with a left border for each item.

## Notes

Ensure that the `items` attribute is provided in a valid JSON format.

Feel free to customize the HNList component to fit your project's specific needs and styling preferences.

## Acknowledgments

The `HNCard` component is part of the `HNComps Library`, developed by `Hajdu Norbert`. Contributions and issues can be reported on the `GitHub repository`.