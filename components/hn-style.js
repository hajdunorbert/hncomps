const HNStyleAttributes = [
    {
        attr: "rounded",
        className: `hn-style-rounded`,
        style: "border-radius: 5px;"
    },
    {
        attr: "shadow",
        className: `hn-style-shadow`,
        style: "box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);"
    },
    {
        attr: "border",
        className: `hn-style-border`,
        style: "border: 1px solid #ccc;"
    },
    {
        attr: "text-centered",
        className: `hn-style-text-centered`,
        style: "text-align:center;"
    },
    {
        attr: "full-width",
        className: `hn-style-full-width`,
        style: "width: 100%;"
    },
    {
        attr: "dropdown",
        className: `hn-style-dropdown`,
        style: "display: inline-block;",
        styleHover: `
            .hn-style-dropdown-content {
                display: block;
            }
        `
    },
    {
        attr: "dropdown-content",
        className: `hn-style-dropdown-content`,
        style: `display: none;
                position: absolute;
                background-color: transparent;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                z-index: 1;
                border-radius: 10px;`
    },
    {
        attr: "dropdown-item",
        className: `hn-style-dropdown-item`,
        style: `padding: 12px 16px;
                text-decoration: none;
                display: block;
                border-radius: 10px;`
    },
];

const elementsWithStyle = [];

function createStyleWithClassname(){
    const styleElement = document.createElement('style');

    document.head.appendChild(styleElement);

    let styleText   = "";

    HNStyleAttributes.forEach(e => {

        styleText += `.${e.className} { ${e.style} }`;

        if(e.styleHover !== undefined){
            styleText += `.${e.className}:hover ${e.styleHover}`;
        }
        
    });

    styleElement.textContent = styleText;
}

function insertClassToElements(){
    HNStyleAttributes.forEach(e => {

        let className = e.className;

        const elements = document.querySelectorAll(`[${e.attr}]`);

        elements.forEach(e => {
            e.classList.add(className);
        });
        
    });
}

createStyleWithClassname();
insertClassToElements();