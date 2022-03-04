/**
 * Bubble sort - Bubbles up bigger values to the right side
 * Runtime: O(n^2)
 * @param {Array|Set} collection elements to be sorted
 */

function BubbleSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      //    In Case of Increasing Order
      if (arr[j] > arr[j + 1]) {
        let swapedEl = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swapedEl;
      }
    }
  }
}

function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      let temp = arr[i];
      let sortedEndIdx = i - 1;
      while (sortedEndIdx >= 0 && arr[sortedEndIdx] > temp) {
        arr[sortedEndIdx + 1] = arr[sortedEndIdx];
        sortedEndIdx--;
      }
      arr[sortedEndIdx + 1] = temp;
    }
  }
}

function SelectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minEleIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minEleIdx]) {
        minEleIdx = j;
      }
    }
    [arr[minEleIdx], arr[i]] = [arr[i], arr[minEleIdx]];
  }
}

let arr1 = [2, 5, 6, 8, 3, 4, 6];
let arr2 = [2, 0, 2, 3, 5, 2, 5];
let arr3 = [-2, 2, 0, 2, 5, 2, 0];
// BubbleSort(arr1);
// BubbleSort(arr2);
// BubbleSort(arr3);

// InsertionSort(arr1);
// InsertionSort(arr2);
// InsertionSort(arr3);

SelectionSort(arr1);
SelectionSort(arr2);
SelectionSort(arr3);
