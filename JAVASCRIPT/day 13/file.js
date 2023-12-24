// TASK 1 **************
function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}
function presentSortedArray(arr) {
    console.log("Sorted Array: " + arr.join(", "));
}
const unsortedArray = [70, 15, 13, 29, 10];
selectionSort(unsortedArray);
presentSortedArray(unsortedArray);

// TASK 2 *****************
function bubbleSort(arr) {
    const len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}
function presentSortedArray(arr) {
    console.log("Sorted Array: " + arr.join(", "));
}
const unsortArray = [75, 27, 15, 29, 10];
const sortedArray = bubbleSort(unsortArray);
presentSortedArray(sortedArray);

// TASK 3 *******************
function insertionSort(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let currentElement = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentElement;
    }
}
function presentSortedArray(arr) {
    console.log("Sorted Array: " + arr.join(", "));
}
const unsorteArray = [75, 27, 15, 29, 10];
insertionSort(unsorteArray);
presentSortedArray(unsorteArray);

// TASK 4 *******************
function linearSearch(arr, target) {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; 
}
function presentElementPosition(position) {
    if (position !== -1) {
        console.log(`L'élément cible a été trouvé à la position ${position}.`);
    } else {
        console.log("L'élément cible n'a pas été trouvé dans le tableau.");
    }
}
const myArray = [74, 15, 13, 29, 11];
const targetElement = 22;
const position = linearSearch(myArray, targetElement);
presentElementPosition(position);

// TASK 5 *******************
function countZeros(matrix) {
    let zeroCount = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeroCount++;
            }
        }
    }
    return zeroCount;
}
const myMatrix = [
    [2, 0, 6],
    [0, 7, 0],
    [8, 0, 5]
];
const numberOfZeros = countZeros(myMatrix);
console.log("Number of zeros in the matrix: " + numberOfZeros);

