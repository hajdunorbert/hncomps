class HNColElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Component's HTML structure
    const base = document.createElement('div');
    base.classList.add('box');
    base.innerHTML = `
      <slot></slot>
    `;

    // Component's CSS styles
    const style = document.createElement('style');
    style.textContent = `
      :host {
          box-sizing: border-box;
      }
    `;

    // Append the elements to the shadow DOM
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(base);
  }
}

customElements.define('hn-col', HNColElement);

class HNRowElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Component's HTML structure
    const base = document.createElement('div');
    base.classList.add('base');
    base.innerHTML = `
      <slot class='container'></slot>
    `;

    // Component's CSS styles
    const style = document.createElement('style');
    style.textContent = `
      .container {
          display: flex;
          flex-wrap: wrap;
          gap: ${this.getGap()};
          justify-content: ${this.getJustifyContent()};
      }
    `;

    // Append the elements to the shadow DOM
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(base);
  }

  connectedCallback() {
    this.adjustColumnWidths();
  }

  getGap() {
    const gapAttribute = this.getAttribute('gap');
    return gapAttribute ? `${gapAttribute}` : '0';
  }

  getJustifyContent() {
    const values = [];

    if (this.hasAttribute('justify-content-center')) {
      values.push('center');
    }
    if (this.hasAttribute('justify-content-evenly')) {
      values.push('space-evenly');
    }
    if (this.hasAttribute('justify-content-between')) {
      values.push('space-between');
    }

    return values.join(' ') || 'flex-start';
  }

  adjustColumnWidths() {
    const columns = this.querySelectorAll('hn-col');
    console.log(columns);

    const totalSpan = 12;

    columns.forEach(col => {
      const span = parseInt(col.getAttribute('size')) || 1;
      const widthPercentage = (span / totalSpan) * 100;
      col.style.width = `calc(${widthPercentage}% - 10px)`;
    });
  }
}

customElements.define('hn-row', HNRowElement);
