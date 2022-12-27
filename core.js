var firstObject = document.getElementById('firstObject');
var secondObject = document.getElementById('secondObject');
var thirdObject = document.getElementById('thirdObject');
var fourthObject = document.getElementById('fourthObject');
var fifthObject = document.getElementById('fifthObject');
var sixthObject = document.getElementById('sixthObject');
var seventhObject = document.getElementById('seventhObject');

let firstGPA = document.getElementById('firstGPA');
let secondGPA = document.getElementById('secondGPA');
let thirdGPA = document.getElementById('thirdGPA');
let fourthGPA = document.getElementById('fourthGPA');
let fifthGPA = document.getElementById('fifthGPA');
let sixthGPA = document.getElementById('sixthGPA');
let seventhGPA = document.getElementById('seventhGPA');

let result1, result2, result3;

function calculate() {
    result1 = (firstObject.value * firstGPA.value) + (secondObject.value * secondGPA.value) + (thirdObject.value * thirdGPA.value) + (fourthObject.value * fourthGPA.value) + (fifthObject.value * fifthGPA.value) + (sixthObject.value * sixthGPA.value) + (seventhObject.value * seventhGPA.value);
    result2 = (firstObject.value * 1) + (secondObject.value * 1) + (thirdObject.value * 1) + (fourthObject.value * 1) + (fifthObject.value * 1) + (sixthObject.value * 1) + (seventhObject.value * 1);
    result3 = result1 / result2;

    document.getElementById('res').innerHTML = `Result: ${result3.toFixed(2)} GPA`;
}