const path = "components/";

const components = [
    "hn-button",
    "hn-card",
    "hn-list",
    "hn-row",
    "hn-palette"
]

components.forEach(e => {
    if(e != "hn-palette"){
        const comp    = document.querySelectorAll(e);

        if(comp.length > 0){
            loadScript(`${path}${e}.js`, () => {
                console.log(`${e} was loaded successfully.`);
            });
        }
    }else if(e == "hn-palette"){
        const comp    = document.querySelectorAll(`[${e}]`);
        if(comp.length > 0){
            loadScript(`${path}${e}.js`, () => {
                console.log(`${e} was loaded successfully.`);
            });
        }
    }
    
});

function loadScript(src, e){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = e;
    document.head.appendChild(script);
}