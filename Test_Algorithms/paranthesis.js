/*
------------- RUN ------------------
node paranthesis.js

strings.json - file to keep the strings to be parsed and validated
------------------------------------
*/

// read strings from json file
const strings = require('./strings.json');
// get the number of strings to validate
const nbStrings = Object.keys(strings['strings']).length;

let parsed = [];
let stringsArr = [];
// put strings in array
for (let i = 0; i < nbStrings; i++) {
    stringsArr[i] = strings['strings'][i]['string'];
}

for (let j = 0; j < stringsArr.length; j++) {
    const stringToParse = stringsArr[j];
    parsed[j] = [];
    for (let k = 0; k < stringToParse.length; k++) {
        // collect all into an array
        if (stringToParse[k] === ')' || stringToParse[k] === '(') {
            parsed[j].push(stringToParse[k]);
        }
    };

};

let response = [];
for (let i = 0; i < parsed.length; i++) {
    let objResponse = {};
    objResponse['string'] = strings['strings'][i]['string'];
    objResponse['valid'] = validate(parsed[i]);
    response[i] = objResponse;
}

console.log('Validation result...');
console.log(response);

function validate(parenthesisArr)
{
    // if no parenthesis in string return true
    if (parenthesisArr.length === 0) {
        return true;
    }
    let countOpened = 0;
    let countClosed = 0;
    // if less than 2 chars return false
    if (parenthesisArr.length < 2) {
        return false;
    }
    // if first char is closed parenthesis or last char is opened parenthesis return false
    if (parenthesisArr[0] === ')' || parenthesisArr[parenthesisArr.length - 1] === '(') {
        return false;
    }
    for (let i = 0; i < parenthesisArr.length; i++) {
        if (parenthesisArr[i] === '(') {
            countOpened++;
        } else {
            countClosed++;
        }
    }
    // check if opened is equal to closed parenthesis
    // if equal return true, if not equal return false
    return countOpened === countClosed;
}
