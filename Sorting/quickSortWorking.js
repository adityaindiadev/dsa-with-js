function initiateQuickSort(array, low, high) {
    if (low < high) {
        const pivotIndex = partition(array, low, high);
        initiateQuickSort(array, low, pivotIndex - 1);
        initiateQuickSort(array, pivotIndex + 1, high);
    }
}

function partition(array, low, high) {
    const pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
}

const array = [2, 4, 1, 24, 3];
console.log("Original Array:", array);
initiateQuickSort(array, 0, array.length - 1);
console.log("Sorted Array:", array);
