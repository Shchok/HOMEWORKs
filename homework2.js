//task1
//let x = 1;
//let y = 2;
//let res1 = x + "" + y;
//console.log(res1);
//console.log(typeof res1);

//let res2 = String(x == 1) + y;
//console.log(res2);
//console.log(typeof res2);

//let res3 = x < y;
//console.log(res3);
//console.log(typeof res3);

//let res4 = x / ("hello" - y);
//console.log(res4);
//console.log(typeof res4);
//task2
// let number = prompt("Введіть число:");
// number = Number(number);
// if (!isNaN(number)) {
//   if (number > 0 && number % 2 === 0) {
//     console.log("Число є парним та додатним");
//   } else {
//     console.log("Число не є одночасно парним і додатним");
//   }
//   if (number % 7 === 0) {
//     console.log("Число кратне 7");
//   } else {
//     console.log("Число не кратне 7");
//   }
// } else {
//   console.log("Ви ввели некоректне число");
// }
//task3
// let arr = [];
// arr[0] = 5;
// arr[1] = "Hello";
// arr[2] = true;
// arr[3] = null;
// console.log("Кількість елементів у масиві:", arr.length);
// arr[4] = prompt("Введіть будь-яке значення для 5-го елемента:");
// console.log("П'ятий елемент масиву:", arr[4]);
// arr.shift();
// console.log("Масив після видалення першого елемента:", arr);
//task4
// let cities = ["Rome", "Lviv", "Warsaw"];
// let result = cities.join("*");
// console.log(result);
//task5
// let isAdult = prompt("Скільки вам років?");
// isAdult = Number(isAdult);
// if (isAdult >= 18) {
//   console.log("Ви досягли повнолітнього віку");
// } else if (isAdult > 0) {
//   console.log("Ви ще надто молоді");
// } else {
//   console.log("Некоректне значення віку");
// }
//task6
// let a = prompt("Введіть довжину сторони a:");
// let b = prompt("Введіть довжину сторони b:");
// let c = prompt("Введіть довжину сторони c:");
// a = Number(a);
// b = Number(b);
// c = Number(c);
// if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
//   console.log("Incorrect data");
// } else if (a + b <= c || a + c <= b || b + c <= a) {
//   console.log("Incorrect data");
// } else {
//   let p = (a + b + c) / 2;
//   let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//   console.log("Площа трикутника:", area.toFixed(3));

//   let sides = [a, b, c].sort((x, y) => x - y);
//   if (Math.abs(sides[0] ** 2 + sides[1] ** 2 - sides[2] ** 2) < 1e-10) {
//     console.log("Трикутник прямокутний");
//   } else {
//     console.log("Трикутник не прямокутний");
//   }
// }
//task7
//if-else
// const now = new Date();
// const currentHour = now.getHours();

// if (currentHour >= 23 || currentHour < 5) {
//   console.log("Доброї ночі");
// } else {
//   if (currentHour < 11) {
//     console.log("Доброго ранку");
//   } else {
//     if (currentHour < 17) {
//       console.log("Доброго дня");
//     } else {
//       console.log("Доброго вечора");
//     }
//   }
// }
//switch
// const now = new Date();
// const currentHour = now.getHours();
// let greeting;

// switch (true) {
//   case currentHour >= 23 || currentHour < 5:
//     greeting = "Доброї ночі";
//     break;
//   case currentHour >= 5 && currentHour < 11:
//     greeting = "Доброго ранку";
//     break;
//   case currentHour >= 11 && currentHour < 17:
//     greeting = "Доброго дня";
//     break;
//   default:
//     greeting = "Доброго вечора";
// }

// console.log(greeting);
