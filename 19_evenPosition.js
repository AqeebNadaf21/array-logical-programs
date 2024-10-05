// 19.Javascript Program to print the element of an array present on even position
function evenPosition(arr) {
    for (let i = 1; i < arr.length; i=i+2) {
        console.log(arr[i]);
    }
}
let array = [1, 6, 3, 9, 4, 2, 6, 3, 9];
console.log("Elements at even position:");
evenPosition(array)
