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

function maxProduct(nums) {
  let arr = nums.sort(function(a, b) {
    return a - b;
  });
  console.log(arr);
  return (arr[nums.length - 1] - 1) * (arr[nums.length - 2] - 1);
}

function findMaxAverage(nums, k) {
  let windowStartIdx = 0;
  let maxSum = -Infinity;
  let windowSum = 0;

  for (let windowEndIdx = 0; windowEndIdx < nums.length; windowEndIdx++) {
    windowSum += nums[windowEndIdx];

    if (windowEndIdx >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= nums[windowStartIdx];
      windowStartIdx += 1;
    }
  }
  return maxSum;
}

function minSubArrayLen(target, nums) {
  // let minLength = Infinity;
  // let isMatch = false;

  // for (let i = 0; i < nums.length; i++) {
  //   let currentRunningSum = 0;
  //   let currentRunninglen = 0;
  //   currentRunningSum += nums[i];
  //   currentRunninglen += 1;
  //   if (currentRunningSum >= target) {
  //     minLength = Math.min(minLength, currentRunninglen);
  //     isMatch = true;
  //     return minLength;
  //   }
  //   for (let j = i + 1; j < nums.length; j++) {
  //     currentRunningSum += nums[j];
  //     currentRunninglen += 1;

  //     if (currentRunningSum >= target) {
  //       minLength = Math.min(minLength, currentRunninglen);
  //       isMatch = true;
  //     }
  //   }
  // }

  // return isMatch ? minLength : 0;

  // More Optimized Approch
  let runningSum = 0;
  let minLength = Infinity;
  let isMatch = false;
  let windowLength = 0;
  let windowStartIdx = 0;

  for (let windowEndIdx = 0; windowEndIdx < nums.length; windowEndIdx++) {
    runningSum += nums[windowEndIdx];
    windowLength += 1;
    // Close Condition For Single Elemenet
    if (runningSum >= target) {
      isMatch = true;
      minLength = Math.min(windowLength, minLength);
    }

    // Shrinking Window Length
    while (runningSum >= target) {
      runningSum -= nums[windowStartIdx];
      windowStartIdx += 1;
      windowLength -= 1;
      if (runningSum >= target) {
        isMatch = true;
        minLength = Math.min(windowLength, minLength);
      }
    }
  }

  return isMatch ? minLength : 0;
}

function longestSubstringWithKdistinct(str, k) {
  let dChar = 0;
  let dMap = {};
  let currentLength = 0;
  let maxLength = -Infinity;
  let subStr = "";

  for (let windowEndIdx = 0; windowEndIdx < str.length; windowEndIdx++) {
    // Create Map And Counting Distinct Char in Particular SubString
    if (dMap[str[windowEndIdx]]) {
      dMap[str[windowEndIdx]] += 1;
    } else {
      dMap[str[windowEndIdx]] = 1;
      dChar += 1;
    }
    currentLength += 1;
    // Check For Unique Char
    if (dChar === k) {
      maxLength = Math.max(maxLength, currentLength);
    }
    // Create SubStr
    subStr += str[windowEndIdx];
    while (dChar > k) {
      let fChar = subStr[0];
      subStr = subStr.slice(1);
      currentLength -= 1;
      if (dMap[fChar] === 1) {
        delete dMap[fChar];
        dChar -= 1;
      } else {
        dMap[fChar] -= 1;
      }
    }

    // // Create SubStr
    // subStr += str[windowEndIdx];
    // currentLength += 1;

    // if(dChar === k){

    // }

    // For First Char;
  }
  return maxLength;
}

function totalFruit(fruits) {
  // Optimized Approch
  let basketA = {};
  let basketB = {};
  let isBasketAEmpty = true;
  let isBasketBEmpty = true;
  let maxFruits = -Infinity;
  let runningSum = 0;
  let dFruits = 0;
  let windowStartIdx = 0;

  for (let windowEndIdx = 0; windowEndIdx < fruits.length; windowEndIdx++) {
    if (isBasketAEmpty) {
      basketA = {
        type: fruits[windowEndIdx],
        count: 1
      };
      isBasketAEmpty = false;
      dFruits += 1;
      runningSum += 1;

      maxFruits = Math.max(maxFruits, runningSum);
    } else if (basketA.type === fruits[windowEndIdx]) {
      basketA.count += 1;
      runningSum += 1;

      maxFruits = Math.max(maxFruits, runningSum);
    } else if (isBasketBEmpty) {
      basketB = {
        type: fruits[windowEndIdx],
        count: 1
      };
      dFruits += 1;
      isBasketBEmpty = false;
      runningSum += 1;

      maxFruits = Math.max(maxFruits, runningSum);
    } else if (basketB.type === fruits[windowEndIdx]) {
      basketB.count += 1;
      runningSum += 1;

      maxFruits = Math.max(maxFruits, runningSum);
    } else {
      maxFruits = Math.max(maxFruits, runningSum);
      dFruits += 1;
      runningSum += 1;
    }

    // Shrink Window From Left
    while (dFruits > 2) {
      runningSum -= 1;

      // Remove The Fruit From Basket
      if (basketA.type === fruits[windowStartIdx]) {
        if (basketA.count === 1) {
          basketA = { type: fruits[windowEndIdx], count: 1 };
          // isBasketAEmpty = true;
          dFruits -= 1;
        } else {
          basketA.count -= 1;
        }
      } else if (basketB.type === fruits[windowStartIdx]) {
        if (basketB.count === 1) {
          basketB = { type: fruits[windowEndIdx], count: 1 };
          // isBasketBEmpty = true;
          dFruits -= 1;
        } else {
          basketB.count -= 1;
        }
      }
      windowStartIdx += 1;
    }
  }

  return maxFruits;
}

function isUnique(s) {
  // Return True - if all character in string is unique else return false;
  let strArr = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (strArr.includes(char)) {
      return false;
    } else {
      strArr.push(char);
    }
  }
  return true;
}

// isUnique("aba");
// isUnique("ab");
// isUnique("abcdrf");
// isUnique("abcdefe");
function nonRepeatSubstring(s) {
  let maxLength = -Infinity;
  let isAny = false;
  for (let i = 0; i < s.length; i++) {
    let subStr = s[i];
    isAny = true;
    maxLength = Math.max(maxLength, subStr.length);
    for (let j = i + 1; j < s.length; j++) {
      subStr += [s[j]];
      if (isUnique(subStr)) {
        maxLength = Math.max(maxLength, subStr.length);
      } else break;
    }
  }
  return isAny ? maxLength : 0;
}

// console.log(nonRepeatSubstring("aabccbb")); //3
// console.log(nonRepeatSubstring("abbbb")); //2
// console.log(nonRepeatSubstring("abccde")); //3
function lengthOfLongestSubstring(s) {
  let charMap = {};
  let windowStartIdx = 0;
  let maxLength = -Infinity;
  let subStr = "";

  for (let windowEndIdx = 0; windowEndIdx < s.length; windowEndIdx++) {
    let char = s[windowEndIdx];
    subStr += char;

    //  if char exist before
    if (charMap[char]) {
      charMap[char] += 1;
      while (charMap[char] !== 1) {
        subStr = subStr.slice(1);
        let firstWindowChar = s[windowStartIdx];
        if (charMap[firstWindowChar] === 1) {
          delete charMap[firstWindowChar];
        } else {
          charMap[char] -= 1;
        }
        windowStartIdx += 1;
      }
    } else {
      charMap[char] = 1;
    }
    maxLength = Math.max(maxLength, subStr.length);
  }
  return maxLength;
}

// console.log(lengthOfLongestSubstring("aabccbb")); //3
// console.log(lengthOfLongestSubstring("abbbb")); //2
// console.log(lengthOfLongestSubstring("abccde")); //3
var longestOnes = function (nums, k) {

};