//Get all the tags that contains the hn-validate
const validateTags = document.querySelectorAll('[hn-validate]');

validateTags.forEach(e => {
    e.addEventListener('keyup', validation);
});

function validation(){

    //Get the label to insert message
    const label = document.querySelector(`[for="${this.name}"]`);

    if(label){
        label.innerHTML = `Ez a label a ${this.name}-hez`;
    }
    console.log(`${this.name} was changed`);
}