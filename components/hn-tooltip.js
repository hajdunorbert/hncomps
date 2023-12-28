//Get all the items with the tooltip attribute
const tagsWithTooltip = document.querySelectorAll(`[hn-tooltip]`);

if(tagsWithTooltip){
    tagsWithTooltip.forEach(tag => {
        const tooltipText = tag.getAttribute(`hn-tooltip`);
        createTooltip(tag, tooltipText);
    });
}

//Create the style for the tooltip
const tooltipStyle = document.createElement('style');

let styleText   = `
    .hn-tooltip {
        display: none;
        z-index: 2;
        padding: 10px;
        position: absolute;
        color: white;
        background-color: black;

        
        width:max-content;
        max-width: 40vw;

        border-radius: 10px;
    }
    .hn-tooltip-container{
        position: relative;
        display: inline-block;
    }
    .hn-tooltip-container:hover .hn-tooltip {
        display: inline-block;;
    }

    @media screen and (min-width: 768px) {
        .hn-tooltip-top{
            bottom: 100%;
        }
        .hn-tooltip-right{
            left: 100%;
            bottom: 0;
        }
        .hn-tooltip-left{
            right: 100%;
            bottom: 0;
        }
    }
    @media screen and (max-width: 768px) {
        .hn-tooltip {
            bottom: 100%;
        }
    }
`;

tooltipStyle.textContent = styleText;

document.head.appendChild(tooltipStyle);

function createTooltip(tag, tooltipText) {
    // Get the parent element of the current tag
    const parentElement = tag.parentNode;

    //create an epty div to place the tag and the tooltip inside
    const emptyDiv = document.createElement('div');
    emptyDiv.classList.add('hn-tooltip-container');

    //Add the tag to the empty div
    emptyDiv.appendChild(tag);

    //Add the empty fiv to the parent element
    parentElement.appendChild(emptyDiv);

    //Create the tooltip
    const tooltip = document.createElement('div');

    //Add the text to the tooltip
    tooltip.textContent = tooltipText;

    if(tag.hasAttribute("hn-tooltip-top")){
        tooltip.classList.add("hn-tooltip-top");
    }else if(tag.hasAttribute("hn-tooltip-right")){
        tooltip.classList.add("hn-tooltip-right");
    }else if(tag.hasAttribute("hn-tooltip-bottom")){
        tooltip.classList.add("hn-tooltip-bottom");
    }else if(tag.hasAttribute("hn-tooltip-left")){
        tooltip.classList.add("hn-tooltip-left");
    }

    //Add the class to the tooltip
    tooltip.classList.add("hn-tooltip");

    //Add the tooltip fiv to the empty div
    emptyDiv.appendChild(tooltip);

}