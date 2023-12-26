const path = "components/";

const components = [
    "hn-button",
    "hn-card",
    "hn-list",
    "hn-row",
    "hn-nav"
];

const attributes = [
    "hn-palette",
    "hn-validate"
];

const styles = [
    "border",
    "rounded",
    "shadow"
];

components.forEach(e => {
    const comp    = document.querySelectorAll(e);

    if(comp.length > 0){
        loadScript(`${path}${e}.js`, () => {
            console.log(`${e} was loaded successfully.`);
        });
    }
    
});

attributes.forEach(e => {
    const comp    = document.querySelectorAll(`[${e}]`);
    if(comp.length > 0){
        loadScript(`${path}${e}.js`, () => {
            console.log(`${e} was loaded successfully.`);
        });
    }
});

styles.forEach(e => {
    const comp          = document.querySelectorAll(`[${e}]`);
    const scriptExists  = document.querySelector(`script[src="${path}hn-style.js"]`);

    if(comp.length > 0 && !scriptExists){
        loadScript(`${path}hn-style.js`, () => {
            console.log(`hn-style was loaded successfully.`);
        });
    }
});

function loadScript(src, e){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = e;
    document.head.appendChild(script);
}
