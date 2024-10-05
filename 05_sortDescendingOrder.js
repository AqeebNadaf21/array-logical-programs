// 5. Javascript program to sort the elements of an array in descending order
function sortArrayDescending(arr) {
    return arr.slice().sort(function (a, b) {
        return b - a;
    });
}
let array = [4, 8, 5, 3, 2, 7, 1, 9, 3];
console.log("Original array:", array);
let sortedArray = sortArrayDescending(array);
console.log(("Array after sorting in descending order:", sortedArray));
