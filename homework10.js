// task1
// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [x, y, , ...z] = arr;
// console.log(x); // "Tom"
// console.log(y); // "Sam"
// console.log(z); // ["Bob"]
// task2
// let data = {
//   names: ["Sam", "Tom", "Ray", "Bob"],
//   ages: [20, 24, 22, 26],
// };

// let {
//   names: [, name2, , name4],
//   ages: [, age2, , age4],
// } = data;

// console.log(name2); // "Tom"
// console.log(age2); // 24
// console.log(name4); // "Bob"
// console.log(age4); // 26
// task3
// function mul(...args) {
//   let result = 1;
//   let hasNumber = false;

//   for (let item of args) {
//     if (typeof item === "number" && !isNaN(item)) {
//       result *= item;
//       hasNumber = true;
//     }
//   }

//   return hasNumber ? result : 0;
// }

// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 0
// task4
// let server = {
//   data: 0,
//   convertToString(callback) {
//     callback(() => this.data + "");
//   },
// };

// let client = {
//   server,
//   result: "",
//   calc(data) {
//     this.server.data = data;
//     this.server.convertToString(this.notification());
//   },
//   notification() {
//     return (callback) => {
//       this.result = callback();
//     };
//   },
// };

// client.calc(123);
// console.log(client.result); // "123"
// console.log(typeof client.result); // "string"
// task5
// function mapBuilder(keysArray, valuesArray) {
//     let map = new Map();
//     for (let i = 0; i < keysArray.length; i++) {
//        map.set(keysArray[i], valuesArray[i]);
//     }
//     return map;
//  }

//  // Приклад використання:
//  let keys = [1, 2, 3, 4];
//  let values = ["div", "span", "b", "i"];
//  let map = mapBuilder(keys, values);

//  console.log(map.size);    // 4
//  console.log(map.get(2));  // "span"
