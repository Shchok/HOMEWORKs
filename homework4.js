//task1
// function calcRectangleArea(width, height) {
//   if (
//     typeof width !== "number" ||
//     typeof height !== "number" ||
//     isNaN(width) ||
//     isNaN(height)
//   ) {
//     throw new Error("Параметри мають бути числами!");
//   }
//   return width * height;
// }

// try {
//   let width = Number(prompt("Введіть ширину прямокутника:"));
//   let height = Number(prompt("Введіть висоту прямокутника:"));

//   let area = calcRectangleArea(width, height);
//   console.log(`Площа прямокутника: ${area}`);
// } catch (error) {
//   console.log(`Помилка: ${error.message}`);
// }
//task2
// function checkAge() {
//   try {
//     let age = prompt("Введіть ваш вік:");

//     if (age === "") {
//       throw new Error("The field is empty! Please enter your age.");
//     }

//     age = Number(age);

//     if (isNaN(age)) {
//       throw new TypeError("You entered not a number!");
//     }

//     if (age < 14) {
//       throw new RangeError("You are too young!");
//     }

//     alert("Access granted. You can watch the movie!");
//   } catch (error) {
//     alert(`Error name: ${error.name}\nError message: ${error.message}`);
//   }
// }

// checkAge();
//task3
// class MonthException {
//   constructor(message) {
//     this.name = "MonthException";
//     this.message = message;
//   }
// }
// function showMonthName(month) {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   if (month < 1 || month > 12 || isNaN(month)) {
//     throw new MonthException("Incorrect month number");
//   }
//   return months[month - 1];
// }
// try {
//   console.log(showMonthName(4));
//   console.log(showMonthName(22));
// } catch (error) {
//   console.log(`${error.name} ${error.message}`);
// }
//task4
// function showUser(id) {
//   if (id < 0) {
//     throw new Error(`ID must not be negative: ${id}`);
//   }
//   return { id: id };
// }
// function showUsers(ids) {
//   const users = [];

//   for (let id of ids) {
//     try {
//       let user = showUser(id);
//       users.push(user);
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
//   return users;
// }
// const ids = [9, 5, -8, 23];
// const result = showUsers(ids);
// console.log(result);
