// GET DATA FROM data.json file
const DATA = data;

// ------------------------------------------------------------------------
// RECEIVE AN INPUT ELEMENT AND CHECK IF IS VALID
// ------------------------------------------------------------------------
function emailInputIsValid(input) {
    return input.value !== '' && input.checkValidity();
}

// ------------------------------------------------------------------------
// SEARCH AN PERSON WITH THE EMAIL PASSED ACROSS DATA ARRAY
// ------------------------------------------------------------------------
function searchPersonByEmail(email) {

    // READ EACH PERSON OF DATA ARRAY
    for (let person of DATA) {

        //CHECK IF HIS EMAIL MATCH WITH SEARCHED EMAIL
        if (person.email === email) {
            // IF MATCH RETURN THAT PERSON
            return person;
        }
    }
    // IF CYCLE END AND NEVER MATCH MEANS EMAIL NO EXIST
    return undefined;
}

// ------------------------------------------------------------------------
// SAVE AN FOUND PERSON ON THE LOCAL STORAGE
// ------------------------------------------------------------------------
function savePerson(person) {
    // SET AN ITEM WITH THE NAME PERSON ON THE LS
    localStorage.setItem('person', person);
}
