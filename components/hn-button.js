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
            }

            .base {
                cursor: pointer;
                padding: 8px 16px;
                transition: background-color 0.3s ease;

                ${this.getColorStyles(this.getAttribute('palette'))}

                ${this.hasAttribute('border') ? 'border: 1px solid #ccc;' : ''}
                ${this.hasAttribute('shadow') ? 'box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);' : ''}
                ${this.hasAttribute('rounded') ? 'border-radius: 5px;' : ''}
            }

            .base:hover {
                ${this.getHoverStyles(this.getAttribute('palette'))}
            }
        `;

        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(base);
    }

    // Function to determine color styles based on the palette or hex color
    getColorStyles(colorValue) {
        const defaultColor = '#3498db';

        const isPalette = ['blue', 'red', 'green', 'orange', 'purple', 'teal'].includes(colorValue);

        if (isPalette) {
            return this.getPaletteStyles(colorValue);
        }

        if (/^#[0-9A-Fa-f]{6}$/.test(colorValue)) {
            return `background-color: ${colorValue}; color: #fff;`;
        }

        return `background-color: ${defaultColor}; color: #fff;`;
    }

    // Function to determine hover styles based on the palette or hex color
    getHoverStyles(colorValue) {
        const defaultColor = '#3498db';

        const isPalette = ['blue', 'red', 'green', 'orange', 'purple', 'teal'].includes(colorValue);

        if (isPalette) {
            return this.getPaletteHoverStyles(colorValue);
        }

        if (/^#[0-9A-Fa-f]{6}$/.test(colorValue)) {
            const hoverColor = this.calculateHoverColor(colorValue);
            return `background-color: ${hoverColor}; color: #fff;`;
        }

        const hoverColor = this.calculateHoverColor(defaultColor);
        return `background-color: ${hoverColor}; color: #fff;`;
    }

    // Function to define color styles for predefined palettes
    getPaletteStyles(palette) {
        const palettes = {
            blue: 'background-color: #3498db; color: #fff;',
            red: 'background-color: #e74c3c; color: #fff;',
            green: 'background-color: #2ecc71; color: #fff;',
            orange: 'background-color: #f39c12; color: #fff;',
            purple: 'background-color: #9b59b6; color: #fff;',
            teal: 'background-color: #008080; color: #fff;',
        };

        return palettes[palette] || palettes.blue;
    }

    // Function to define hover styles for predefined palettes
    getPaletteHoverStyles(palette) {
        const hoverPalettes = {
            blue: 'background-color: #1f77b4; color: #fff;',
            red: 'background-color: #c0392b; color: #fff;',
            green: 'background-color: #27ae60; color: #fff;',
            orange: 'background-color: #d35400; color: #fff;',
            purple: 'background-color: #8e44ad; color: #fff;',
            teal: 'background-color: #006666; color: #fff;',
        };

        return hoverPalettes[palette] || hoverPalettes.blue;
    }

    // Function to calculate a slightly darker shade for hover effect
    calculateHoverColor(hexColor) {
        const darkenPercentage = 10;
        const rgbColor = this.hexToRgb(hexColor);
        const darkenedRgbColor = {
            r: Math.max(0, rgbColor.r - (rgbColor.r * darkenPercentage) / 100),
            g: Math.max(0, rgbColor.g - (rgbColor.g * darkenPercentage) / 100),
            b: Math.max(0, rgbColor.b - (rgbColor.b * darkenPercentage) / 100),
        };

        return this.rgbToHex(darkenedRgbColor);
    }

    // Function to convert hex color to RGB
    hexToRgb(hex) {
        const bigint = parseInt(hex.slice(1), 16);
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255,
        };
    }

    // Function to convert RGB color to hex
    rgbToHex(rgb) {
        return `#${(1 << 24 | rgb.r << 16 | rgb.g << 8 | rgb.b).toString(16).slice(1)}`;
    }
}

customElements.define('hn-button', HNButtonElement);
