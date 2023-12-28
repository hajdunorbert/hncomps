let hnSignatureImage;

(function() {

    const resizeObserver = new ResizeObserver(() => {
        adjustCanvasSize();
    });

    //Get all the elements with the hn-signature tag
    const hnSignatureElements = document.querySelectorAll(`[hn-signature]`);

    if(hnSignatureElements){

        //Create the styling
        const style = document.createElement('style');

        const styleText = `
            .hn-signature-container{
                display: flex;
                flex-direction: column;
                
            }
            .hn-signature-canvas{
                width: 100%;
                height: 100%;
            }
            .hn-signature-clear-button{
                font-family: 'Courier New', Courier, monospace;
            }
        `;

        style.textContent = styleText;

        document.head.appendChild(style);

        hnSignatureElements.forEach(tag => {
            createElement(tag);
            resizeObserver.observe(tag);
        });

    }

    function adjustCanvasSize() {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
    }

    function createElement(tag){
        //Create the canvas
        const c = document.createElement('canvas');

        //Give the canvas an ID
        c.setAttribute('id', 'signatureCanvas');
        c.classList.add("hn-signature-canvas");

        //append the canvas to the container
        tag.appendChild(c);

        tag.classList.add("hn-signature-container");

        //Create the clear button
        const cBtn = document.createElement("button");

        cBtn.textContent = "Clear Signature";
        cBtn.classList.add("hn-signature-clear-button");

        cBtn.setAttribute('id', 'clearButton');
        //append the canvas to the container
        tag.appendChild(cBtn);
    }

    const canvas = document.getElementById('signatureCanvas');
    const context = canvas.getContext('2d');
    const clearButton = document.getElementById('clearButton');

    let drawing = false;

    function startPosition(e) {
        drawing = true;
        draw(e);
    }

    function endPosition() {
        drawing = false;
        context.beginPath();

        hnSignatureImage = canvas.toDataURL('image/png');
    }

    function draw(e) {
        if (!drawing) return;

        context.lineWidth = 2;
        context.lineCap = 'round';
        context.strokeStyle = 'black';

        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);
    clearButton.addEventListener('click', clearCanvas);
})();