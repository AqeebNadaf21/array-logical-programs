// 13.Javascript Program to copy all elements from one array into another array
// Method : 1 
let array = [1, 2, 3, 4, 5];
let newArray = [];
for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
}
console.log(newArray);


// Method : 2
let array1 = [1, 2, 3, 4, 5];
let newArray1 = array1.slice();
console.log(newArray1);


// Method : 3
let array2 = [1, 2, 3, 4, 5];
let newArray2 = [...array2]
console.log(newArray2);

