// 18.Javascript Program to print the elements of an array in reverse order
// Method : 1 => Using While Loop
function arrayReverseWhile(arr) {
    let i = arr.length - 1;
    while (i >= 0) {
        console.log(arr[i]);
        i--;
    }
}
let whileArray = [1, 2, 3, 4, 5];
console.log("Using while loop:");
arrayReverseWhile(whileArray);


// Method : 2 => Using Do While Loop
function arrayReverseDoWhile(arr) {
    let i = arr.length-1;
    do{
        console.log(arr[i]);;
        i--;
    }while (i >= 0);
}
let dowhileArray = [1, 2, 3, 4, 5];
console.log("Using do...while loop");
arrayReverseDoWhile(dowhileArray);


// Method : 3 => Using For Loop
function arrayReverseFor(arr) {
    for(let i=arr.length-1; i>=0; i--){
        console.log(arr[i]);
    }
}
let forArray = [1, 2, 3, 4, 5];
console.log("Using for loop");
arrayReverseFor(forArray);


// Method : 4 => Using For Each Loop
function arrayForEach(arr) {
    arr.slice().reverse().forEach(function(element){
        console.log(element);
    });
}
let forEachArray = [1, 2, 3, 4, 5];
console.log("Using forEach loop");
arrayForEach(forEachArray);
