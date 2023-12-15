// components/card.js
class HNCardElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      // Component's HTML structure
      const base = document.createElement('div');
      base.classList.add('base');
      base.innerHTML = `
        <div class="header">
          <slot name="image"></slot>
        </div>
        <div class="body">
            <slot class="title" name="title"></slot>
            <slot name="content"></slot>
            <slot name="footer"></slot>
        </div>
      `;
  
      // Component's CSS styles
      const style = document.createElement('style');
      style.textContent = `
        :host {
            --card-width: 200px;
            display: block;
            width: var(--card-width);
            margin: 10px;
            ${this.hasAttribute('shadow') ? 'box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);' : 'none'}
            ${this.hasAttribute('text-centered') ? 'text-align:center' : ''}
        }

        .body {
            padding: 20px;
            ${this.hasAttribute('border') ? 'border: 1px solid #ccc;' : 'none'}
            ${this.hasAttribute('rounded') ? 'border-radius: 0 0 5px 5px' : 'none'}
        }

        .title {
            font-size: 1.2em;
            font-weight: bold;
        }

        ::slotted(img) {
            width: 100%;
            height: auto;
            display: block;
            ${this.hasAttribute('rounded') ? 'border-radius: 5px 5px 0 0' : 'none'}
        }
        `;
  
      // Append the elements to the shadow DOM
      this.shadowRoot.appendChild(style);
      this.shadowRoot.appendChild(base);
  
    }
  
    static get observedAttributes() {
      return ['width'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'width') {
            this.style.setProperty('--card-width', `${newValue}px`);
        }
    }
}
  
customElements.define('hn-card', HNCardElement);