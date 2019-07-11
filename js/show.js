// +++++++ --------- EXECUTE WHEN FILE IS LOADED --------- ++++++

// SAVE THE PERSON OBJECT IN VARIABLE
const person = getPerson();

if (person !== null) {
    writeTextInElement('person-card-title', person.name + ', ' + person.age);
    writeTextInElement('person-card-notes', person.notes)
}

// +++++++ --------- EXECUTE WHEN FILE IS LOADED --------- ++++++


// ------------------------------------------------------------------------
// GET THE ITEM PERSON FROM LOCAL STORAGE
// ------------------------------------------------------------------------
function getPerson() {

    // GET THE ITEM PERSON (as a string)
    var person = localStorage.getItem('person');

    // PARSE FROM STRING TO OBJECT
    person = JSON.parse(person);

    // RETURN IT
    return person;
}

// ------------------------------------------------------------------------
// WRITE A GIVEN TEXT IN AN GIVEN HTML ELEMENT TAKING HIS STYLE
// ------------------------------------------------------------------------
function writeTextInElement(elementId, text) {

    // GET THE ELEMENT WITH THE GIVEN ID
    var element = document.getElementById(elementId);

    // WRITE THE TEXT
    element.innerText = text;
}
