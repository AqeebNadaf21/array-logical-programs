// 16.Javascript Program to print the duplicate element of an array
// Method : 1
function findDuplicates(array) {
    const duplicate = [];
    for (let i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++){
            if (array[i] == array[j] && !duplicate.includes(array[i])) {
                duplicate.push(array[i]);
            }
        }
    }
    return duplicate;
}
const numbers = [2, 4, 8, 5, 6, 3, 2, 4, 6, 6];
const duplicateNumbers = findDuplicates(numbers);
console.log("Duplicate numbers:", duplicateNumbers);


// Method : 2
function duplicateOptimized(array) {
    const duplicate = [];
    const frequencyMap = {};
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (frequencyMap[element]) {
            if (!duplicate.includes(element)) {
                duplicate.push(element);
            }
        }else{
            frequencyMap[element] = true;
        }
    }
    return duplicate;
}
const numb = [2, 4, 8, 5, 6, 3, 2, 4, 6, 6];
const duplicate = duplicateOptimized(numb);
console.log("Duplicate numbers:", duplicate);


// Method : 3
function printDuplicate(arr) {
    let elementCount = {};
    let duplicate = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (elementCount[element]) {
            elementCount[element]++;
        }else{
            elementCount[element] = 1;
        }
    }
    for (let element in elementCount) {
        if (elementCount[element] > 1) {
            duplicate.push(element);
        }
    }
    if(duplicate.length > 0) {
        console.log("Duplicate element:", duplicate);
    }else{
        console.log("No duplicate elements found");
    }
}
let array = [2, 4, 8, 5, 6, 3, 2, 4, 6, 6];
printDuplicate(array);
