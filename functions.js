function firstName(names) {
    return names[0];
}

function firstNumber(numbers) {
    return numbers[0]
}
//------------
function ausserLetztenName(names) {
    return names.slice(0, -1)
}

function ausserLetzteNumber(numbers) {
    return numbers.slice(0, -1)
}
//--------------
function lastName(names) {
    return names.pop()
}

function lastNumber(numbers) {
    return numbers.pop()
}
//------------
function notfirstandAllNames(names) {
    return names.slice(1)
}

function notfirstandAllNumbers(numbers) {
    return numbers.slice(1)
}
//----------

function eNte(arrayN, n) {
    if (n < 0 || n > arrayN.length) {
        return arrayN.slice(-1)
    } else if (n >= 0 && n <= arrayN.length) {
        return arrayN[n];
    }
}

//--------
function removeItemFromArray(names, n) {
    const newArray = [];

    for (let i = 0; i < names.length; i++) {
        if (names[i] !== n) {
            newArray.push(names[i]);
        }
    }
    return newArray;
}
//-------

function removeDuplicates(arrDouble) {
    return arrDouble.filter((item, index) => arrDouble.indexOf(item) === index);
}

//-------
// function sumArr(arrayssu) {
//     arrayssu = arrayssu.
// }

function sumArr(params) {

}



module.exports = {
    firstName,
    firstNumber,
    ausserLetzteNumber,
    ausserLetztenName,
    lastName,
    lastNumber,
    notfirstandAllNames,
    notfirstandAllNumbers,
    eNte,
    removeItemFromArray,
    removeDuplicates
}