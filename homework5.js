//task1
//task2
// let person = {
//   name: "Oksana",
//   age: 45,
//   city: "Lviv",
//   isStudent: false,
//   hobby: "painting",
// };
// function showProps(obj) {
//   let props = Object.keys(obj);
//   let values = Object.values(obj);

//   console.log("Властивості об'єкта:", props);
//   console.log("Значення властивостей:", values);
// }

// showProps(person);
//task3
// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   showFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }
// class Student extends Person {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }

//   showFullName(middleName) {
//     return `${this.name} ${middleName} ${this.surname}`;
//   }

//   showCourse() {
//     const currentYear = new Date().getFullYear();
//     const course = currentYear - this.year;

//     if (course < 1 || course > 6) {
//       return "Невірний курс (можливо закінчив/ще не вступив)";
//     }

//     return course;
//   }
// }

// const student1 = new Student("Oksana", "Shcherba", 2024);

// console.log(student1.showFullName("Vasylivna"));
// console.log("Поточний курс:", student1.showCourse());
//task 4
// class Worker {
//   #experience = 1.2;

//   constructor(fullName, dayRate, workingDays) {
//     this.fullName = fullName;
//     this.dayRate = dayRate;
//     this.workingDays = workingDays;
//   }

//   showSalary() {
//     const salary = this.dayRate * this.workingDays;
//     console.log(`${this.fullName} salary: ${salary}`);
//     return salary;
//   }

//   showSalaryWithExperience() {
//     const salaryExp = this.dayRate * this.workingDays * this.#experience;
//     console.log(`${this.fullName} salary with experience: ${salaryExp}`);
//     return salaryExp;
//   }

//   get experience() {
//     return this.#experience;
//   }

//   set experience(value) {
//     this.#experience = value;
//   }
// }
// const worker1 = new Worker("Oksana Shcherba", 100, 20);
// const worker2 = new Worker("Andrii Shcherba", 80, 25);
// const worker3 = new Worker("Nadiya Patrun", 120, 22);

// worker1.showSalary();
// worker1.showSalaryWithExperience();

// worker1.experience = 1.5;
// console.log(`${worker1.fullName} new experience: ${worker1.experience}`);
// worker1.showSalaryWithExperience();

// worker2.experience = 1.3;
// worker3.experience = 1.6;

// worker2.showSalaryWithExperience();
// worker3.showSalaryWithExperience();

// const workers = [worker1, worker2, worker3];

// workers.sort(
//   (a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience()
// );

// console.log("Sorted salary with experience:");
// for (let worker of workers) {
//   console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
// }
//task5
// class GeometricFigure {
//   getArea() {
//     return 0;
//   }

//   toString() {
//     return this.constructor.name;
//   }
// }
// class Triangle extends GeometricFigure {
//   constructor(base, height) {
//     super();
//     this.base = base;
//     this.height = height;
//   }

//   getArea() {
//     return 0.5 * this.base * this.height;
//   }
// }
// class Square extends GeometricFigure {
//   constructor(side) {
//     super();
//     this.side = side;
//   }

//   getArea() {
//     return this.side ** 2;
//   }
// }
// class Circle extends GeometricFigure {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }

//   getArea() {
//     return Math.PI * this.radius ** 2;
//   }
// }

// function handleFigures(figures) {
//   const totalArea = figures.reduce((sum, figure) => {
//     if (figure instanceof GeometricFigure) {
//       const area = figure.getArea();
//       console.log(
//         `Geometric figure: ${figure.toString()} - area: ${area.toFixed(2)}`
//       );
//       return sum + area;
//     } else {
//       console.log("Invalid figure");
//       return sum;
//     }
//   }, 0);

//   console.log(`Total area: ${totalArea.toFixed(2)}`);
//   return totalArea;
// }
// const figures = [new Triangle(4, 5), new Square(7), new Circle(3)];

// handleFigures(figures);
