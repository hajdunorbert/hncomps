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
    }
];

const elementsWithStyle = [];

function createStyleWithClassname(){
    const styleElement = document.createElement('style');

    document.head.appendChild(styleElement);

    let styleText   = "";

    HNStyleAttributes.forEach(e => {

        styleText += `.${e.className} { ${e.style} }`;
        
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