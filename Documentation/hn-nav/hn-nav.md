# HNNav Component

The HNNav component is a versatile navigation bar element designed to enhance website navigation. It provides a responsive layout that adjusts based on screen size, ensuring a seamless user experience.

## Usage

To integrate the HNNav component into your project, use the following HTML structure:

```html
<hn-nav hn-palette="green">
  <div class="logo" slot="left">Your Logo</div>
  <ul class="nav-links" slot="center">
    <li>
      <a href="#"
        ><hn-button hn-palette="blue" hover rounded>Home</hn-button></a
      >
    </li>
    <li>
      <a href="#"
        ><hn-button hn-palette="blue" hover rounded>About</hn-button></a
      >
    </li>
    <li>
      <a href="#"
        ><hn-button hn-palette="blue" hover rounded>Services</hn-button></a
      >
    </li>
    <li>
      <a href="#"
        ><hn-button hn-palette="blue" hover rounded>Contact</hn-button></a
      >
    </li>
  </ul>

  <hn-button slot="right" hn-palette="blue" hn-toggle="hn-nav" hover rounded
    ><a href="#">&#9776; Menu</a></hn-button
  >
</hn-nav>
```

## Customization

The `<hn-nav>` element supports the following attributes for customization:

`hn-palette`: Set the color palette for the navigation bar. Choose from `blue`, `red`, `green`, `orange`, `purple`, `teal`, or specify a `custom color`.

## Event Handling

The component includes a toggle feature for mobile navigation. When the designated button with `hn-toggle="hn-nav"` is clicked, the mobile navigation becomes `visible` or `hidden`. You can customize the toggle behavior in the `handleScreenSize` and `menuButton.addEventListener` functions within the JavaScript code.

## Acknowledgments

The `HNNav` component is part of the `HNComps library`, developed by `Hajdu Norbert`. Feel free to contribute or report issues on the `GitHub repository`.
