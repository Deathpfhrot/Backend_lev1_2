const { firstName, firstNumber, ausserLetzteNumber, ausserLetztenName, lastName, lastNumber, notfirstandAllNames, notfirstandAllNumbers, eNte, removeItemFromArray, removeDuplicates } = require("./functions.js")

const { names, numbers } = require("./data.js")




console.log(firstName(names));
console.log(firstNumber(numbers));


console.log(ausserLetzteNumber(names));
console.log(ausserLetztenName(numbers));

console.log(lastName(names));
console.log(lastNumber(numbers));

console.log(notfirstandAllNames(names));
console.log(notfirstandAllNumbers(numbers));

console.log(eNte(names, -3));
console.log(eNte(numbers, -4));

console.log(removeItemFromArray(names, "Ahmed"));
console.log(removeItemFromArray(numbers, 1));

console.log(removeDuplicates(numbers));