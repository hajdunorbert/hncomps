class HNFormElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const base = document.createElement('div');
        base.classList.add('base');

        base.innerHTML = `
            <slot>${this.textContent}</slot>
        `;

        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: inline-block;
            }
        `;

        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(base);
    }
  
}

customElements.define('hn-form', HNFormElement);
