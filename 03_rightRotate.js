// 3. Javascript program to right rotate the element of an array.
function rightRotateArray(arr) {
    if (arr.length == 0) {
        return arr;
    }
    let lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
}
let array = [1, 2, 3, 4, 5, 6];
console.log("Original array:", array);
let rotatedArray = rightRotateArray(array);
console.log("Array after right rotation:", rotatedArray);