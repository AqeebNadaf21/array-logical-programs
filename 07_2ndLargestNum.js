// 7. Javascript program to find 2nd largest number in an array
function secondLargest(arr) {
    if(arr.length < 2){
        return "Array doesn't have enough elements";
    }
    arr.sort(function(a, b){
        return b - a;
    });
    return arr[1];
}
let array = [5, 7, 1, 8, 4, 9, 3, 2]
console.log("Second largest number in the array:", secondLargest(array));

