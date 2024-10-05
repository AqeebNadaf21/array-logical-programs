// 6. Javascript program to find the 3rd largest number in an array
function findThirdLargest(arr) {
    if(arr.length < 3){
        return "Array doesn't have enough elements";
    }
    arr.sort(function(a, b){
        return b - a;
    });
    return arr[2];
}
let array = [5, 4, 6, 8, 3, 9, 1, 4]
console.log("Third largest number in the array:", findThirdLargest(array));

