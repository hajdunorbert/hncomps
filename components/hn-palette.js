const elementsWithPalette = document.querySelectorAll('[hn-palette]');

elementsWithPalette.forEach(function (element) {
    const paletteColor = element.getAttribute('hn-palette');

    // Generate a unique class or ID
     const uniqueClass = `hn-palette-${Math.random().toString(36).substring(7)}`;

    element.classList.add(uniqueClass);

    // Create a style rule for :hover
    const style = document.styleSheets[0].insertRule(
        `.${uniqueClass} { ${getColorStyles(paletteColor)} }`,
        document.styleSheets[0].cssRules.length
    );

    if(element.hasAttribute('hover')){
        // Create a style rule for :hover
        const hoverStyle = document.styleSheets[0].insertRule(
            `.${uniqueClass}:hover { ${getHoverStyles(paletteColor)} }`,
            document.styleSheets[0].cssRules.length
        );
    }

});

function getColorStyles(colorValue) {
  const defaultColor = '#3498db';

  const isPalette = ['blue', 'red', 'green', 'orange', 'purple', 'teal'].includes(colorValue);

  if (isPalette) {
    return getPaletteStyles(colorValue);
  }

  if (/^#[0-9A-Fa-f]{6}$/.test(colorValue)) {
    return `background-color: ${colorValue}; color: #fff;`;
  }

  return `background-color: ${defaultColor}; color: #fff;`;
}

function getPaletteStyles(palette) {
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

function getPaletteHoverStyles(palette) {
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

function getHoverStyles(colorValue) {
  const defaultColor = '#3498db';

  const isPalette = ['blue', 'red', 'green', 'orange', 'purple', 'teal'].includes(colorValue);

  if (isPalette) {
    return getPaletteHoverStyles(colorValue);
  }

  if (/^#[0-9A-Fa-f]{6}$/.test(colorValue)) {
    const hoverColor = calculateHoverColor(colorValue);
    return `background-color: ${hoverColor}; color: #fff;`;
  }

  const hoverColor = calculateHoverColor(defaultColor);
  return `background-color: ${hoverColor}; color: #fff;`;
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

// Function to generate a hash from a string
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
    }
    // Ensure the hash is a positive number
    hash = hash >>> 0;
    return hash.toString(36);
}