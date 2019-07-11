// +++++++ --------- EXECUTE WHEN FILE IS LOADED --------- ++++++




// +++++++ --------- EXECUTE WHEN FILE IS LOADED --------- ++++++


// ------------------------------------------------------------------------
// GET THE ITEM PERSON FROM LOCAL STORAGE
// ------------------------------------------------------------------------
function getPerson() {
    return localStorage.getItem('person')
}

// WRITE A GIVEN TEXT IN AN GIVEN HTML ELEMENT TAKING HIS STYLE
function writeTextInElement(elementId, text) {

    // GET THE ELEMENT WITH THE GIVEN ID
    var element = document.getElementById(elementId);

    // WRITE THE TEXT
    element.innerText = text;
}
