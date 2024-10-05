// 12. javascript program to print Odd and Even number from an array
function evenOdd(arr) {
    let oddNum = [];
    let evenNum = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenNum.push(arr[i]);
        }else{
            oddNum.push(arr[i])
        }
    }
    console.log("Even numbers:", evenNum);
    console.log("Odd numbers:", oddNum);
}
let array = [4, 6, 2, 5, 8, 1, 9, 3, 7]
console.log("Original array:", array);
console.log("Even and Odd numbers of an array:");
evenOdd(array);
