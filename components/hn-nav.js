class HNNavElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const base = document.createElement('div');
        base.classList.add("nav");

        const mobile = document.createElement('div');
        mobile.classList.add("mobile");

        if(this.hasAttribute('hn-palette')){
            const paletteColor = this.getAttribute('hn-palette');

            mobile.style.backgroundColor = getHoverStyles(paletteColor);
        }

        // Check if the host element has classes
        if (this.classList.length > 0) {
            // Convert the classList to an array and add the classes to the base element
            Array.from(this.classList).forEach((className) => {
                base.classList.add(className);
            });
        }

        function getHoverStyles(colorValue) {
            const defaultColor = '#3498db';
            
            const isPalette = ['blue', 'red', 'green', 'orange', 'purple', 'teal'].includes(colorValue);
            
            if (isPalette) {
                return getPaletteHoverStyles(colorValue);
            }
            
            if (/^#[0-9A-Fa-f]{6}$/.test(colorValue)) {
                const hoverColor = calculateHoverColor(colorValue);
                return `${hoverColor};`;
            }
            
            const hoverColor = calculateHoverColor(defaultColor);
            return `${hoverColor};`;
        }

        function getPaletteHoverStyles(palette) {
            const hoverPalettes = {
                blue: '#1f77b4',
                red: '#c0392b',
                green: '#27ae60',
                orange: '#d35400',
                purple: '#8e44ad',
                teal: '#006666',
            };
            
            return hoverPalettes[palette] || hoverPalettes.blue;
        }

        function calculateHoverColor(hexColor) {
            const darkenPercentage = 10;
            const rgbColor = hexToRgb(hexColor);
            const darkenedRgbColor = {
                r: Math.max(0, rgbColor.r - (rgbColor.r * darkenPercentage) / 100),
                g: Math.max(0, rgbColor.g - (rgbColor.g * darkenPercentage) / 100),
                b: Math.max(0, rgbColor.b - (rgbColor.b * darkenPercentage) / 100),
            };
            
            return rgbToHex(darkenedRgbColor);
        }

        function hexToRgb(hex) {
            const bigint = parseInt(hex.slice(1), 16);
            return {
                r: (bigint >> 16) & 255,
                g: (bigint >> 8) & 255,
                b: bigint & 255,
            };
        }
        
        function rgbToHex(rgb) {
            return `#${(1 << 24 | rgb.r << 16 | rgb.g << 8 | rgb.b).toString(16).slice(1)}`;
        }

        function handleScreenSize() {
            // Check if the screen width is less than or equal to a certain threshold (e.g., 768 pixels)
            if (window.innerWidth <= 768) {
                // Code to execute for mobile-sized screens
                base.innerHTML = `
                    <slot name="left"></slot>
                    <slot name=""></slot>
                    <slot name="right"></slot>
                `;

                mobile.innerHTML = `
                    <slot name="center"></slot>
                `;
            } else {
                // Code to execute for larger screens
                // Component's HTML structure
                base.innerHTML = `
                    <slot name="left"></slot>
                    <slot name="center"></slot>
                    <slot name="right"></slot>
                `;

                mobile.innerHTML = `
                    
                `;
            }
        }

        // Initial check on page load
        handleScreenSize();

        // Event listener for changes in screen size
        window.addEventListener('resize', handleScreenSize);

        // Assuming you have a reference to the button element
        const menuButton = document.querySelector('[hn-toggle]');

        // Add an event listener for the 'click' event
        menuButton.addEventListener('click', () => {
            // Check if the hn-toggle attribute is hn-nav
            const toggleValue = menuButton.getAttribute('hn-toggle');

            if (toggleValue === 'hn-nav') {

                mobile.classList.toggle('visible');
                
            }
        });

        // Component's CSS styles
        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: inline-block;
                width: 100%;
            }

            .mobile{
                width: 100%;
                display: none;
                padding-top: 10px;
            }

            .mobile ul li{
                background-color:red;
            }

            .nav {
                display: flex;
                justify-content: space-between;
                flex-direction: row;
                align-items: center;
                padding: 10px;
            }

            ::slotted(ul){
                display: flex;
                list-style: none;
                padding: 0;
                margin: 0;
                gap: 10px;
            }

            @media screen and (max-width: 768px) {
                ::slotted([slot="right"]) {
                    display: block;
                }

                .mobile {
                    display: none;
                    left: 0;
                    width: 100%;
                }

                .visible{
                    display: flex;
                    z-index: 1;
                    width: 100%;
                }

                ::slotted(ul){
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }

            }

            @media screen and (min-width: 769px) {
                ::slotted([slot="right"]) {
                    display: none;
                }
                ::slotted([slot="center"]) {
                    margin: 0 auto;
                }
            }

        `;
  
        // Append the elements to the shadow DOM
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(base);
        this.shadowRoot.appendChild(mobile);
    }
}
  
customElements.define('hn-nav', HNNavElement);