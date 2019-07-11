// +++++++ --------- EXECUTE WHEN FILE IS LOADED --------- ++++++

// SAVE THE PERSON OBJECT IN VARIABLE
const person = getPerson();

// CHECK IF THERE ARE RESULT
if (person !== null) {

    // IF THERE ARE SHOW THE PERSON CARD INFORMATION
    writeTextInElement('person-card-title', person.name + ', ' + person.age);
    writeTextInElement('person-card-notes', person.notes);
    writeTextInElement('person-card-address', person.address);
    writeTextInElement('person-card-email', person.email);
    writeItemsInHTML('person-card-phone', person.phoneNumbers, 'phone');
    writeItemsInHTML('person-card-relatives', person.relatives, 'name')
} else {

    document.getElementById('person-card').className = 'no-display';
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

function writeItemsInHTML(elementId, list, property) {

    // GET THE ELEMENT WITH THE GIVEN ID
    var element = document.getElementById(elementId);

    // INITIALIZE VARIABLE
    let HTMLItems = '';

    // CONCAT ALL ITEMS
    for (let item of list) {
        HTMLItems += '<p>' + item[property] + '</p>'
    }

    // INSERT HTML ITEMS ON DOM
    element.innerHTML = HTMLItems;
}
