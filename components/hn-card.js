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
            display: inline-block;
            width: var(--card-width);
            max-width: 100%;
        }

        .body {
            padding: 20px;
        }

        .title {
            font-size: 1.2em;
            font-weight: bold;
        }

        ::slotted(img) {
            width: 100%;
            height: auto;
            display: block;
        }
        `;
  
      // Append the elements to the shadow DOM
      this.shadowRoot.appendChild(style);
      this.shadowRoot.appendChild(base);
  
    }
    
}
  
customElements.define('hn-card', HNCardElement);