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
                transition: background-color 0.3s ease;
            }
            .base {
                padding: 8px 16px;
            }
        `;

        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(base);
    }
  
}

customElements.define('hn-button', HNButtonElement);
