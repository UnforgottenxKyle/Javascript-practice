// FIZZBUZZ
// const fizzBuzzGame = (num) => {
//   for (let i = 1; i < num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else {
//       console.log(i);
//     }
//   }
// };
// console.log(fizzBuzzGame(100));

//Test 3

// let sortedArr = [];

// const sortedArrays = (array1, array2) => {
//   sortedArr = [...array1, ...array2].sort();
//   return sortedArr;
// };

// console.log(sortedArrays([3, 9, 1, 2, 4], [7, 6, 1]));

// const array = [1, 7, 2, 2, 5, 3, 1];
// const target_sum = 9;

// Target sum number
// const sum = (test_array, target_sum) => {
//   for (let i = 0; i < test_array.length; i++) {
//     for (let k = i + 1; k < test_array.length; k++) {
//       if (test_array[i] + test_array[k] + test_array[k + 1] === target_sum) {
//         res1 = [test_array[i], test_array[k], test_array[k + 1]];
//       }
//       if (test_array[i] + test_array[k] === target_sum) {
//         res2 = [test_array[i], test_array[k]];
//       }
//     }
//   }
//   return [res2, res1];
// };
// let total = [...res1, ...res2];
// console.log(sum([1, 7, 2, 2, 5, 3, 1], 9));

// Bubble Sort
// const array = [6, 0, 3, 5, 1];
// let res;

// for (let i = 0; i < array.length; i++) {
//   for (let k = 0; k < array.length; k++) {
//     if (array[k] > array[k + 1]) {
//       res = array[k];
//       array[k] = array[k + 1];
//       array[k + 1] = res;
//     }
//   }
// }
// console.log(array);

// Selection Sort
// const arr = [2, 4, 6, 5, 7, 8, 12, 53];

// for (let i = 0; i < arr.length; i++) {
//   let min = i;
//   let temp;

//   for (let k = i + 1; k < arr.length; k++) {
//     if (arr[min] > arr[k]) {
//       min = k;
//     }
//   }
//   temp = arr[i];
//   arr[i] = arr[min];
//   arr[min] = temp;
// }
// console.log(arr);

// SortedSquaredNumbers
// const squaredArrays = (array) => {
//   let newArr = new Array(array.length).fill(0);
//   let arrLeft = 0;
//   let arrRight = array.length - 1;
//   for (let i = array.length - 1; i >= 0; i--) {
//     const leftSquared = array[arrLeft] * array[arrLeft];
//     const rightSquared = array[arrRight] * array[arrRight];
//     if (leftSquared > rightSquared) {
//       newArr[i] = leftSquared;
//       arrLeft++;
//     } else {
//       newArr[i] = rightSquared;
//       arrRight--;
//     }
//   }
//   return newArr;
// };

// console.log(squaredArrays([7, 2, 5, 6, 9]));

// LINEAR SEARCH
// const linearSearch = (arr, value) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       return i;
//     }
//   }
//   return -1;
// };
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12];
// const number = 12;
// console.log(linearSearch(array, number));

//BINARY SEARCH

// const linearSearch = (arr, target) => {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let middle = Math.floor(left + (right - left) / 2);
//     let value = arr[middle];

//     console.log("middle: " + value);

//     if (value < target) {
//       left = middle + 1;
//     } else if (value > target) {
//       right = middle - 1;
//     } else {
//       return middle;
//     }
//   }
// };

// let array = [];
// for (let i = 0; i < 1000; i++) {
//   array.push(i);
// }
// console.log(array);
// const number = 2;
// const total = linearSearch(array, number);

// console.log(total);
// let x = 0;

// while (x < 10) {
//   x += 1;
//   if (x % 2 == 0) {
//     console.log(x + 1);
//   }
// }

// var i = 0;
// while (i < 10) {
//   i += 1;
//   console.log(i);
//   if (2 * i == i + i) {
//     break;
//   }
// }

// let x = 1000;
// while (x > 0) {
//   console.log(x % 10);
//   x = Math.floor(x / 10);
// }

// BINARY SEARCH
// const binarySort = (arr, target) => {
//   let left = 0;
//   let right = arr.length - 1;
//   let middle;

//   while (left <= right) {
//     middle = Math.floor((left + right) / 2);
//     console.log(arr[middle]);
//     if (target === arr[middle]) {
//       return arr[middle];
//     }
//     if (target <= arr[middle]) {
//       right = middle - 1;
//     } else {
//       left = middle + 1;
//     }
//   }
//   return -1;
// };

// let result = binarySort([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
// console.log(result);
