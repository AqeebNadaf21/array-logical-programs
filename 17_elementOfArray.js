// 17.Javascript Program to print the elements of an array
// Method : 1 => Using For Loop
function arrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
let array = [1, 2, 3, 4, 5];
arrayElements(array);


// Method : 2 => Using While Loop
function arrayElementsWhile(arr) {
    let i = 0;
    while (i < arr.length){
        console.log((arr[i]));
        i++;
    }
}
let whileArray = [1, 2, 3, 4, 5];
console.log("Using while loop:");
arrayElementsWhile(array);


// Method : 3 → Using Do While Loop
function elementsDoWhile(arr) {
    let i = 0;
    do{
        console.log(arr[i]);
        i++;
    }while(i < arr.length);
}
let doWhileArray = [1, 2, 3, 4, 5];
console.log("Using do...while loop:");
elementsDoWhile(array);


// Method : 4 => Using ForEach Loop
function elementsForEach(arr) {
    arr.forEach(function(element){
        console.log(element);
    });
}
let forEachArray = [1, 2, 3, 4, 5];
console.log("Using forEach loop:");
elementsForEach(array);

