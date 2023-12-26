# HNValidate Component Documentation

`HNValidate` is a JavaScript Component that provides a simple and customizable way to perform input validation and display error messages in a list format.<br>
With `HNValidate`, you can easily enhance the user experience by validating form inputs and presenting clear error messages.

## Installation

Include the `hn-comps.js` JavaScript file in your project. Since the `HNComps` are dynamically loading the script based on the components used.

## Validation Rules

The following validation rules are supported:

`required`: Ensures that the input is not empty.<br>
`min:length`: Validates the input against a `minimum length` requirement.<br>
`max:length`: Validates the input against a `maximum length` requirement.

## Usage

Before using `HNValidate`, ensure that your form includes a button with the `type="submit"` attribute.<br>
This button will be automatically enabled or disabled based on the validation rules applied to the form inputs.

## Example

```html
<form name="login">
  <input
    placeholder="Username"
    name="username"
    hn-validate="required min:8 max:12"
  />
  <label for="username"></label>

  <button type="submit" disabled>Submit</button>
</form>
```

In this example, the `hn-validate` attribute is applied to input fields with various validation rules.<br>
The error messages will be displayed as a list within the corresponding label.<br>
The form submission button will be disabled if there are validation errors.

Adjust the rules and styling as needed for your project.
