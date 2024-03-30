/*
------------- RUN ------------------

node pascal.js 5 1 3

first arg: number of lines for triangle
second arg: line
third arg: column

------------------------------------
*/

function generate(lines)
{
    console.log('Generating Pascal Triangle...');
    if (typeof lines === 'undefined') {
        console.log('Invalid lines number for generating Pascal Triangle.');
        return false;
    }

    let triangle = [];
    for (let i = 0; i < lines; i++) {
        triangle[i] = [];
        for (let k = 0; k < i+1; k++) {
            if (k === 0 || k === i) {
                triangle[i][k] = 1;
            } else {
                triangle[i][k] = triangle[i-1][k-1] + triangle[i-1][k];
            }
        }
    }
    return triangle;
}

function pascal(column, line)
{
    if (typeof triangle[line][column] != 'undefined') {
        return triangle[line][column];
    }
    return 'Element not available';
}

function runAndValidate()
{
    if (typeof process.argv[3] === 'undefined' || typeof process.argv[4] === 'undefined') {
        console.log('Invalid arguments input for pascal function.');
        return false;
    }
    let input1 = parseInt(process.argv[3]);
    let input2 = parseInt(process.argv[4]);
    if (!Number.isInteger(input1) || !Number.isInteger(input2)) {
        console.log('Input type not numbers');
        return false;
    }
    if (input1 > lines || input2 > lines) {
        console.log('Invalid input number range.');
        return false;
    }
    console.log('Getting Pascal Triangle Element pascal(' + input1 + ', ' + input2 + ') : ' + pascal(input1, input2));
}

const lines = process.argv[2];
const triangle = generate(lines);
if (false !== triangle) {
    console.log(triangle);
    runAndValidate();
}
