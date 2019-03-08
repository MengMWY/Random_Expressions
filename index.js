const fs = require('fs');
var expressions = [];       //String containing the mathematical expressions
const N_EQ = 4;        //Number of mathematical expressions
 
main();     //Call the function main

//Function that print a string into a file
function printIntoFile(fileText){
    fs.writeFile('./results.txt', fileText, (err) => {      //Print the text into the file
        if (!err) console.log('File successfully saved');
        else console.log('Error while saving file...');         //Error message
    });
}
 
//Function that generate random number within a range
function generateRandomValue(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

//Function that generate and compute an expression
function generateExpression(factors, operations) {
    var result = factors[0];
    var expression = '' + factors[0];
 
    for (var i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case 0:     //Addition
                result += factors[i + 1];       //Compute the operation and update the result
                expression += (' + ' + factors[i + 1]);     //Insert the random factor into the string
                break;
 
            case 1:     //Subtraction
                result -= factors[i + 1];       //Compute the operation and update the result
                expression += (' - ' + factors[i + 1]);     //Insert the random factor into the string
                break;
            case 2:     //Multiplication
                result *= factors[i + 1];       //Compute the operation and update the result
                expression += (' * ' + factors[i + 1]);     //Insert the random factor into the string
                break;
            case 3:     //Division
                result *= 1 / factors[i + 1];       //Compute the operation and update the result
                expression += (' / ' + factors[i + 1]);     //Insert the random factor into the string
                break;
        }
    }
    expression += ' = ' + Math.round(result);       //Insert the result into the string
    return expression;      //Return the string containing the expression
}
 
function main() {
    for (var i = 0; i < N_EQ; i++) {
        var numberFactors = generateRandomValue(3, 5);      //Generate che number of factors into the expression
 
        var factors = [];
        var operations = [];
 
        for (var j = 0; j < numberFactors; j++) {
            factors[j] = generateRandomValue(0, 100);       //Generate the factors into the expression
            if (j < numberFactors - 1) operations[j] = generateRandomValue(0, 3);       //Generate the operations into the expression  
        }
 
        expressions[i] = generateExpression(factors, operations);
    }

    var fileText = '1756138\n' + expressions.toString().split(',').join('\n') + '\n';       //String containig the text for the file
    printIntoFile(fileText);
}