// 4. Javascript program to sort the elements of an array in ascending order
function sortArrayAscending(arr) {
    return arr.slice().sort(function(a, b){
        return a - b;
    });
}let array = [4, 8, 5, 3, 2, 7, 1, 9, 3];
console.log("Original array;", array);
let sortedArray = sortArrayAscending(array);
console.log("Array after sorting in ascending order;", sortedArray);
