function isArraySorted() {
  function isArraySortedAlgo(arr, idx) {
    // Base Case
    if (idx === arr.length - 1) {
      return true;
    }
    // Recurrence Relation
    if (arr[idx] <= arr[idx + 1]) {
      isArraySortedAlgo(arr, idx + 1);
      return true;
    } else {
      // Base Case
      return false;
    }
  }
  console.log(isArraySortedAlgo([-5, 0, 1, 3, 4, 5, 6, 17, 8, 11], 0));
}

function oneToN(n, i) {
  //  Base Case
  if (i === n) {
    console.log(i);
    return;
  }

  oneToN(n, i + 1);
  console.log(i);
  // Recurrence Relation
}

function findFirstOccurrence(arr, key, idx) {
  if (idx === arr.length - 1) return -1;
  if (arr[idx] === key) return idx;
  return findFirstOccurrence(arr, key, idx + 1);
}

function powerN(a, n) {
  // N is Not a negatie number
  if (n === 0) return 1;
  return a * powerN(a, n - 1);
}

function powerNOptimized(a, n) {
  if (n === 0) return 1;
  let num;
  if (n % 2 === 0) {
    num = powerNOptimized(a, n / 2);
    return num * num;
  } else {
    num = powerNOptimized(a, (n - 1) / 2);
    return a * num * num;
  }
}

function bubbleSort(arr) {
  // How Many Swaps We Need to make
  for (let i = 1; i < arr.length; i++) {
    //  Take a Max Element to last
    for (let j = 0; j < arr.length - i; j++) {
      // Swap the Max Element
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

// let arr = [-5, 2, 7, 3, 0, 8, 1];
// bubbleSort(arr);

function digitStr(digit) {
  switch (digit) {
    case 0:
      return "zero";
      break;
    case 1:
      return "one";
      break;
    case 2:
      return "two";
      break;
    case 3:
      return "three";
      break;
    case 4:
      return "four";
      break;
    case 5:
      return "five";
      break;
    case 6:
      return "six";
      break;
    case 7:
      return "seven";
      break;
    case 8:
      return "eight";
      break;
    case 9:
      return "nine";
      break;
    default:
      return -1;
  }
}

function numberSpell(number) {
  let prevstr = "";
  let str = "";
  while (number !== 0) {
    let lastDigit = number % 10;
    let prevstr = digitStr(lastDigit);
    str = `${prevstr} ${str}`;
    number = parseInt(number / 10);
  }
  return str;
}

function numberSpellRecursive(number, str) {
  if (number === 0) {
    return "";
  }
  let lastDigit = number % 10;
  let lastDigitStr = digitStr(lastDigit);
  return `${numberSpellRecursive(parseInt(number / 10), "")} ${lastDigitStr}`;
}

console.log(numberSpellRecursive(20222));
