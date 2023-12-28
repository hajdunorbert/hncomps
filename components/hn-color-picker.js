class HNColorPickerElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.color  = "#ffffff";

        // Component's HTML structure
        const base = document.createElement('div');
        base.classList.add('base');

        base.innerHTML = `
            <div class="colorContainer">
                <div class="textContainer">
                    ${this.color}
                </div>
            </div>
            
            <div class="colorPickerContainer" value="${this.color}">
                <div>
                    <input type="color" value="${this.color}">
                </div>
            </div>
        `;

        // Component's CSS styles
        const style = document.createElement('style');
        style.textContent = `
            :host{
                display: inline-block;
            }
            .base{
                display:flex;
                flex-direction: column;
                justify-content:center;
                align-items:center;
                width: 100%;
                height: 100%;
            }
            .colorContainer{
                border: 2px solid rgb(73, 68, 68);
                width: 100%;
                height: 100%;
                background-color: ${this.color};
                display:flex;
                justify-content:center;
                align-items:center;
                transition: .2s ease;
            }
            .textContainer{
                background-color: white;
                display:flex;
                justify-content:center;
                align-items:center;
                padding: 5px 10px;
                border-radius: 10px;
                cursor: pointer;
            }
            .colorPickerContainer{
                width: 100%;
            }
            .colorPickerContainer div{
                padding: 5px;
            }
            .colorPickerContainer input{
                width: 100%;
            }
        `;

        // Append the elements to the shadow DOM
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(base);

        // Add event listener to the input element
        const inputElement = this.shadowRoot.querySelector('input');
        inputElement.addEventListener('input', this.changeColor.bind(this));

        // Add click event listener to the text container
        const textContainer = this.shadowRoot.querySelector('.textContainer');
        textContainer.addEventListener('click', this.copyValueToClipboard.bind(this));
    }

    changeColor(event) {
        this.color = event.target.value;

        this.shadowRoot.querySelector('.colorContainer').style.backgroundColor = this.color;
        this.shadowRoot.querySelector(".textContainer").textContent = this.color;

         // Set the host element's value property
         this.setAttribute("value", this.color);
    }

    copyValueToClipboard() {
        const textContainer = this.shadowRoot.querySelector('.textContainer');
        const textToCopy = textContainer.textContent;

        // Create a temporary textarea to copy the text
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = textToCopy;
        document.body.appendChild(tempTextarea);

        // Select the text in the textarea and copy it to the clipboard
        tempTextarea.select();
        document.execCommand('copy');

        // Remove the temporary textarea
        document.body.removeChild(tempTextarea);

        textContainer.textContent = 'Copied!';
        setTimeout(() => {
            textContainer.textContent = this.color;
        }, 1000);
    }
}
  
customElements.define('hn-color-picker', HNColorPickerElement);