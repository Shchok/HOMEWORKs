//task1
// const numbers = [2, 3, 4, 5];
// let product = 1;
// for (let i = 0; i < numbers.length; i++) {
//   product *= numbers[i];
// }
// console.log("Добуток елементів (через for):", product);

// const numbers = [2, 3, 4, 5];
// let product = 1;
// let i = 0;
// while (i < numbers.length) {
//   product *= numbers[i];
//   i++;
// }
// console.log("Добуток елементів (через while):", product);
//task2
// for (let i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }
//task3
// function randArray(k) {
//   const randomArray = [];
//   for (let i = 0; i < k; i++) {
//     const randomNumber = Math.floor(Math.random() * 500) + 1;
//     randomArray.push(randomNumber);
//   }
//   return randomArray;
// }
// const myArray = randArray(5);
// console.log(myArray);
//task4
// function raiseToDegree(a, b) {
// if (!Number.isInteger(a) || !Number.isInteger(b)) {
//     return "Помилка: Обидва числа повинні бути цілими.";
//   }
//   if (b < 0) {
//     return 1 / power(a, -b);
//   }

//   return power(a, b);
// }
// function power(a, b) {
//   let result = 1;
//   for (let i = 0; i < b; i++) {
//     result *= a;
//   }
//   return result;
// }
// const numberAString = prompt("Введіть ціле число для основи (a):");
// const numberBString = prompt("Введіть ціле число для степеня (b):");
// if (
//   numberAString !== null &&
//   numberBString !== null &&
//   !isNaN(numberAString) &&
//   !isNaN(numberBString)
// ) {
//   const numberA = parseInt(numberAString);
//   const numberB = parseInt(numberBString);

//   const result = raiseToDegree(numberA, numberB);
//   console.log(
//     `Результат піднесення ${numberA} до степеня ${numberB}: ${result}`
//   );
// } else {
//   console.log("Помилка: Будь ласка, введіть цілі числа.");
// }
//task5
// function findMin() {
//   if (arguments.length === 0) {
//     return undefined;
//   }
//   let min = arguments[0];
//   for (let i = 1; i < arguments.length; i++) {
//     if (arguments[i] < min) {
//       min = arguments[i];
//     }
//   }
//   return min;
// }
// console.log(findMin(10, 12, 2, -2, 0.4));
// console.log(findMin(7, 12, 4, 9));
// console.log(findMin(1));
// console.log(findMin());
//task6
// function findUnique(arr) {
//   return new Set(arr).size === arr.length;
// }
// console.log(findUnique([1, 2, 3, 5, 3]));
// console.log(findUnique([1, 2, 3, 5, 11]));
// console.log(findUnique([1, 1, 1, 1]));
// console.log(findUnique(["a", "b", "c"]));
// console.log(findUnique(["a", "b", "a"]));
//task7
// function lastElem(arr, x) {
//   if (!arr || arr.length === 0) {
//     return undefined;
//   }
//   if (x === undefined) {
//     return arr[arr.length - 1];
//   }
//   if (!Number.isInteger(x) || x <= 0) {
//     return [];
//   }
//   if (x >= arr.length) {
//     return arr;
//   }
//   return arr.slice(-x);
// }
// console.log(lastElem([3, 4, 10, -5]));
// console.log(lastElem([3, 4, 10, -5], 2));
// console.log(lastElem([3, 4, 10, -5], 8));
// console.log(lastElem([1, 2, 3], 1));
// console.log(lastElem([1, 2, 3], 0));
// console.log(lastElem([1, 2, 3], -1));
// console.log(lastElem([]));
// console.log(lastElem(null));
//task8
// function capitalizeWords(str) {
//     if (!str) {
//       return '';
//     }
//       return str.split(' ')
//               .map(word => {
//                 if (word.length === 0) {
//                   return '';
//                 }
//                 return word.charAt(0).toUpperCase() + word.slice(1);
//               })
//               .join(' ');
//   }
//      const inputString = 'i love java\nscript';
//   const outputString = capitalizeWords(inputString);
//   console.log("Input string:", inputString);
//   console.log("Output string:", outputString);

//   const anotherString = 'the quick brown fox';
//   const capitalizedString = capitalizeWords(anotherString);
//   console.log("Input string:", anotherString);
//   console.log("Output string:", capitalizedString);

//   const emptyString = '';
//   const capitalizedEmpty = capitalizeWords(emptyString);
//   console.log("Input string:", emptyString);
//   console.log("Output string:", capitalizedEmpty);

//   const stringWithMultipleSpaces = '  multiple   spaces  ';
//   const capitalizedMultipleSpaces = capitalizeWords(stringWithMultipleSpaces);
//   console.log("Input string:", stringWithMultipleSpaces);
//   console.log("Output string:", capitalizedMultipleSpaces);
