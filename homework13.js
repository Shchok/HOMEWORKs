// task1

// function getPromise(message, delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(message);
//     }, delay);
//   });
// }

// // Приклад використання:
// getPromise("test promise", 2000).then(function (data) {
//   console.log(data); // Виведе "test promise" через 2 секунди
// });
// task2
// function calcArrProduct(arr) {
//     return new Promise((resolve, reject) => {
//         if (arr.every(item => typeof item === 'number')) {
//             const product = arr.reduce((acc, num) => acc * num, 1);
//             resolve(product);
//         } else {
//             reject("Error! Incorrect array!");
//         }
//     });
// }

// // Приклад використання:
// calcArrProduct([3, 4, 5])
//     .then(result => console.log(result))          // 60
//     .catch(error => console.log(error));

// calcArrProduct([5, "user2", 7, 12])
//     .then(result => console.log(result))
//     .catch(error => console.log(error));          // "Error! Incorrect array!"
// task3
// const delay = (i, time) =>
//   new Promise((resolve) => setTimeout(() => resolve(i), time));

// function showNumbers() {
//   let promiseChain = Promise.resolve();

//   for (let i = 0; i <= 9; i++) {
//     promiseChain = promiseChain
//       .then(() => {
//         const randomDelay = Math.floor(Math.random() * 3001);
//         console.log(
//           `Запускаємо виведення числа ${i} з затримкою ${randomDelay} мс...`
//         );
//         return delay(i, randomDelay);
//       })
//       .then((number) => {
//         console.log(number);
//       });
//   }
// }

// showNumbers();
// task 4
// const delay = (i, time) =>
//   new Promise((resolve) => setTimeout(() => resolve(i), time));

// async function showNumbers() {
//   for (let i = 0; i <= 9; i++) {
//     const randomDelay = Math.floor(Math.random() * 3001);

//     console.log(
//       `Запускаємо виведення числа ${i} з затримкою ${randomDelay} мс...`
//     );

//     const number = await delay(i, randomDelay);

//     console.log(number);
//   }
// }

// showNumbers();
