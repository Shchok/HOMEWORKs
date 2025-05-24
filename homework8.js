// task1
// function upperCase(str) {
//   if (!str) {
//     return "String is empty";
//   }

//   if (str[0] === str[0].toUpperCase() && str[0] !== str[0].toLowerCase()) {
//     return "String's starts with uppercase character";
//   } else {
//     return "String's not starts with uppercase character";
//   }
// }
// task2
// function checkEmail(email) {
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailPattern.test(email);
// }
//task3
// const str = "cdbBdbsbz";
// const regex = /d(b+)(d)/gi;

// const match = str.match(/d(b+)(d)/gi);
// const details = /d(b+)(d)/i.exec(str);

// console.log(match); // ["dbBd"]
// console.log(details[1]); // "bB" — запам'ятані "b"
// console.log(details[2]); // "d" — запам'ятана остання "d"
// task4
// const str = "Java Script";
// const result = str.replace(/(\w+)\s+(\w+)/, "$2, $1");

// console.log(result); // Script, Java
//task5
// function validateCardNumber(cardNumber) {
//     const pattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
//     return pattern.test(cardNumber);
// }
//task6
// function checkEmail(email) {
//     const pattern = /^[a-zA-Z0-9](?!.*--)[a-zA-Z0-9_-]*@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

//     if (pattern.test(email)) {
//         console.log("Email is correct!");
//     } else {
//         console.log("Email is not correct!");
//     }
// }
// task7
// function checkLogin(login) {
//     const loginPattern = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/;
//     const isValid = loginPattern.test(login);

//     const numberPattern = /\d+(\.\d+)?/g;
//     const numbers = login.match(numberPattern);

//     console.log(isValid);       // true або false
//     console.log(numbers);       // масив чисел як рядків або null

//     return isValid;
// }
