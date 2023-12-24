class HNButtonElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const base = document.createElement('div');
        base.classList.add('base');

        base.innerHTML = `
            ${this.textContent}
        `;

        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: inline-block;
                cursor: pointer;
                padding: 8px 16px;
                transition: background-color 0.3s ease;

                ${this.hasAttribute('border') ? 'border: 1px solid #ccc;' : ''}
                ${this.hasAttribute('shadow') ? 'box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);' : ''}
                ${this.hasAttribute('rounded') ? 'border-radius: 5px;' : ''}
            }
        `;

        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(base);
    }

   

    

    

    

    

    
}

customElements.define('hn-button', HNButtonElement);
