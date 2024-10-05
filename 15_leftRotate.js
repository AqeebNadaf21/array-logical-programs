// 15.Javascript program to left rotate the elements of an array
function leftRotate(arr) {
    if(arr.length == 0){
        return arr;
    }
    let firstElement = arr.shift();
    arr.push(firstElement);
    return arr;
}
let array = [1, 2, 3, 4, 5];
console.log("Original array:", array);
let rotatedArray = leftRotate(array)
console.log("Array after left rotation:", rotatedArray);
