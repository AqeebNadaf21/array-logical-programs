// 11. Javascript program to remove the duplicate element in an array
function removeDuplicate(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) == -1){
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray
}
let array = [4, 6, 7, 3, 4, 9, 5, 3, 8, 2, 6];
console.log("Original array:", array);
let uniqueArray = removeDuplicate(array);
console.log("Array after removing duplicates:", uniqueArray);
