function basic() {
  const arr = [1, 2, 3];
  console.log(arr[2]);

  let str = "string";
  console.log(str[0]);

  arr[0] = 5;
  str[0] = "a";
  str += "b";
}

// Insertion
function Insertion() {
  const arr = [1, 2, 3];
  arr.push(4);
  arr.pop();

  arr.unshift(0);
  arr.shift();

  arr.splice(1, 0, 1.5);
}

// Binary Search Algorithm
function BinarySearch() {
  const arr = [1, 5, 9, 10, 15, 18, 27, 30, 35, 50];

  function BinaryAlgorithm(arr, target) {
    let start_index = 0;
    let last_index = arr.length - 1;
    while (start_index <= last_index) {
      let mid_index = start_index + Math.floor((last_index - start_index) / 2);
      if (arr[mid_index] === target) return mid_index;
      else if (arr[mid_index] > target) last_index = mid_index - 1;
      else start_index = mid_index + 1;
    }
    return -1;
  }

  console.log(BinaryAlgorithm(arr, 0));
}

// Reverse an Array
function ReverseArr() {
  const arr = [1, 5, 9, 10, 15, 18, 27, 30, 35, 50];

  function ReverseAlgo(arr) {
    let first_index = 0;
    let last_index = arr.length - 1;

    while (first_index <= last_index) {
      let reserved = arr[first_index];
      arr[first_index] = arr[last_index];
      arr[last_index] = reserved;
      first_index += 1;
      last_index -= 1;
    }

    console.log(arr);
  }
  ReverseAlgo(arr);
}

function AllPossiblePairs() {
  const arr = [1, 5, 9, 10, 15, 18, 27, 30, 35, 50];

  function PPAlgo(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (j = i + 1; j < arr.length - 1; j++) {
        console.log(arr[i], arr[j]);
      }
    }
  }
  PPAlgo(arr);
}

function SubArray() {
  const arr = [1, 5, 9, 10, 15, 18, 27, 30, 35, 50];

  function SubArrAlgo(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length - 1; j++) {
        // for (let k = i; k <= j; k++) {

        // }
        console.log(arr.slice(i, j));
      }
    }
  }

  SubArrAlgo(arr);
}

function LargestSumSubArray() {
  const arr = [1, 5, -9, 10, -15, 18, -27, 30, -35, -50];
  let largestSum = arr[0];
  function LargestSumSubAlgo(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        let sum = 0;
        // for (let k = i; k <= j; k++) {
        //   sum += arr[k];
        // }
        for (let k = i; k < j + 1; k++) {
          sum += arr[k];
        }
        if (sum > largestSum) {
          largestSum = sum;
          console.log(`(${arr[i]} -  ${arr[j]}) - Sum - ${sum}`);
          sum = 0;
        }
      }
    }
  }
  LargestSumSubAlgo(arr);
  console.log(largestSum);
}

LargestSumSubArray();
