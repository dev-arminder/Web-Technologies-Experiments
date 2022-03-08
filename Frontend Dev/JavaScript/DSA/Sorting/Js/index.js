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

// function partition(arr, low, high){
//   let pivotIdx = high;
//   let pivotElementIdx = 0;

// }

function partition(arr, low, high) {
  let pivotElement = high;
  let leftIdx = 0;
  while (arr[leftIdx] <= arr[pivotElement]) {
    leftIdx += 1;
  }
  for (let rightIdx = leftIdx + 1; rightIdx < high; rightIdx++) {
    if (arr[rightIdx] < arr[pivotElement]) {
      [arr[leftIdx], arr[rightIdx]] = [arr[rightIdx], arr[leftIdx]];
      leftIdx += 1;
    }
  }

  [arr[leftIdx], arr[pivotElement]] = [arr[pivotElement], arr[leftIdx]];
  return leftIdx;
}

function QuickSort(arr, startIdx, endIdx) {
  // Base Case
  if (endIdx <= startIdx) return;
  let pivotPosition = partition(arr, startIdx, endIdx);
  QuickSort(arr, startIdx, pivotPosition - 1);
  QuickSort(arr, pivotPosition + 1, endIdx);
  // return pivotPosition;
  return arr;
}
QuickSort(arr1, 0, arr1.length - 1);
