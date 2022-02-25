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

function PascalTraingle(n) {
  let arr = [];
  if (n === 1) {
    arr = [[1]];
  }
  if (n === 2) {
    arr = [[1], [1, 1]];
  } else if (n > 2) {
    arr = [[1], [1, 1]];

    for (let i = 3; i < n + 1; i++) {
      let row = [1];
      for (let j = 1; j < i - 1; j++) {
        row.push(arr[i - 2][j - 1] + arr[i - 2][j]);
      }
      row.push(1);
      arr.push(row);
    }
  }
  return arr;
}

function NumJewelsInStones(jewels, stones) {
  let jewelsObj = {};
  let num = 0;
  for (let i = 0; i < jewels.length; i++) {
    if (jewelsObj[jewels[i]] !== undefined) {
      jewelsObj[jewels[i]] += 1;
    } else {
      jewelsObj[jewels[i]] = 1;
    }
  }
  for (let i = 0; i < stones.length; i++) {
    if (jewelsObj[stones[i]] !== undefined) {
      num += 1;
    }
  }

  return num;
}

function KidsWithCandy(candies, extraCandies) {
  let booleanArr = [];
  let maxCandies = candies[i];

  // Finding maximum Candy from Arr
  for (let i = 1; i < candies.length; i++) {
    if (candies[i] > maxCandies) maxCandies = candies[i];
  }

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandies) {
      booleanArr.push(true);
    } else booleanArr.push(false);
  }

  return booleanArr;
}
