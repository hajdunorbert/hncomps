// Get all the tags that contain the hn-validate
const validateTags = document.querySelectorAll('[hn-validate]');

if (validateTags.length > 0) {
    validateTags.forEach(tag => {
        const validateAttribute = tag.getAttribute('hn-validate');
        const separatedRules = validateAttribute.split(' ');

        // Get the label to insert the message
        var label = document.querySelector(`label[for="${tag.name}"]`);

        //Insert an ul to the label
        var labelList = document.createElement('ul');

        label.appendChild(labelList);

        separatedRules.forEach(rule => {
            if (rule === "instant") {
                tag.addEventListener('keyup', debounce(() => validation(tag, rule, labelList), 300));
            } else {
                tag.addEventListener('blur', debounce(() => validation(tag, rule, labelList), 100));
            }
        });
    });
}

function validation(tag, rule, labelList) {

    try {

        if(rule.includes(":")){
            let split = rule.split(':');

            rule = split[0];
            var value = split[1];
        }

        switch (rule) {
            case "required":
                //Check if the input is not empty
                checkForRequiredField(tag);
                break;

            case "min":
                checkForMinLength(tag, value);
                break;

            case "max":
                checkForMaxLength(tag, value);
                break;

            default:
                // Handle unknown rule
                throw new Error(`Unknown validation rule: ${rule}`);
        }
        // Clear any previous error messages
        if (labelList) {
            labelList.innerHTML = "";
        }

        // Get the parent form of the input
        const parentForm = tag.form;

        // Get the button inside the form with type "submit"
        const buttonInsideTheForm = parentForm.querySelector('[type="submit"]');

        if(buttonInsideTheForm){
            // Remove the disabled attribute from the button
            buttonInsideTheForm.removeAttribute('disabled');
        }
    } catch (error) {
        // Handle validation errors and provide feedback to the user
        setTimeout(() => {
            const listItem = document.createElement('li');
            listItem.innerHTML = error.message;
            
            labelList.appendChild(listItem);

            // Get the parent form of the input
            const parentForm = tag.form;

            // Get the button inside the form with type "submit"
            const buttonInsideTheForm = parentForm.querySelector('[type="submit"]');

            if(buttonInsideTheForm){
                // Remove the disabled attribute from the button
                buttonInsideTheForm.setAttribute('disabled', 'disabled');
            }
        }, 10);

    }
}

function checkForRequiredField(tag){
    if (tag.value.trim() === "") {
        throw new Error("This field is required.");
    }
}

function checkForMinLength(tag, value){
    if (tag.value.trim().length < value) {
        throw new Error(`The length must be at least ${value} charaters long!`);
    }
}

function checkForMaxLength(tag, value){
    if (tag.value.trim().length > value) {
        throw new Error(`The length can't be more than ${value} charaters long!`);
    }
}

// Debounce function implementation
function debounce(func, delay) {
    let timeoutId;
    return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, arguments), delay);
    };
}