// 10. Javascript program to find the smallest number in an array
function smallestNumber(arr) {
    if (arr.length == 0) {
        return "Array is empty"
    }
    let smallest = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}
let array = [4, 7, 3, 6, 9, 2, 8, 5, 1];
console.log("Smallest number in the array:", smallestNumber(array));
