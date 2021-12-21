// // //PROTOTYPE

// // const first = {
// //     a: 1,
// //     b: 2,
// //     c: 3,
// //     // toString(){
// //     //     return "hello"
// //     // }
// // }
// // const second = [4, 5, 6]

// // Array.prototype.at = function() {
// //     return 'hello'
// // }

// // const student = {
// //     name: 'Ivan',
// //     surname: 'Ivanov',
// //     age: 18,
// //     getYear() {
// //         return 2021 - this.age
// //     }
// // }

// // function Student(name, sername, age) {
// //   this.name = name;
// //   this.sername = sername;
// //   this.age = age;
// // }
// // Student.prototype.getYear = function () {
// //   return 2021 - this.age;
// // };

// // const viktor = new Student("Viktor", "Chystiakov", 1993);
// // const dima = new Student("Dima", "pupkin", 1992);
// // const vova = new Student("Vova", "Ivanow", 1991);
// // console.log(viktor);
// // console.log(dima);
// // console.log(vova);

// // // 1. this = {}
// // // 2. this.proto = student.prototype
// // // 3. все свойства
// // // 4. return this (тобишь объект)

// function Student(name, sername, year) {
//   this.name = name;
//   this.sername = sername;
//   this.yearOfBirth = year;
//   this.presents = new Array(30);
//   this.marks = new Array(30);
// }
// // Сколько лет студенту
// Student.prototype.getAge = function () {
//   return 2021 - this.yearOfBirth;
// };

// // Поиск свободной ячейки масива
// function freeIndex(arrey, value) {
//   const freeIndex = arrey.findIndex((value) => value === undefined);
//   if (freeIndex === -1) return;
//   arrey[freeIndex] = value;
// }

// //  Если студент был на занятии
// Student.prototype.setPresent = function () {
//   freeIndex(this.presents, true);
// };

// //  Если студент небыл на занятии
// Student.prototype.setAbsent = function () {
//   freeIndex(this.presents, false);
// };

// //  Оценка студенту за занятие
// Student.prototype.setMark = function (grade) {
//   freeIndex(this.marks, grade);
// };

// //  Определение средней оценки за 30 занятий
// function getAverage(array) {
//   const avg = array.reduce((sum, val) => sum + val) / array.length;
//   return +avg.toFixed(1);
// }

// // Проверяет среднюю оценку, и среднее посещение
// Student.prototype.summary = function () {
//     ////////////////////////////////////////////
//   const mark = getAverage(this.marks);
//   const presents = getAverage(this.presents);
//   console.log(this.name);
//   console.log("Оценка", mark);
//   console.log("Посещение", presents);
//     ///////////////////////////////////////////
//   if (mark > 9 && presents > 0.9) {
//     console.log("Ути какой молодчинка!");
//   } else if (mark > 9 || presents > 0.9) {
//     console.log("Норм, но можно лучше");
//   } else if (mark < 9 && presents < 0.9) {
//     console.log("Редиска!");
//   } else {
//     console.log("Eror");
//   }
// };

// //  Генератор рандома
// function random(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
// }

// //  Прототип для автоматического заполнения посещений и оценок
// Student.prototype.generate = function () {
//   for (let i = 0; i < this.presents.length; i++) {
//     const int = random(1, 10); // Рандом от 1 до 10 включительно
//     this.setMark(int);
//     if (int % 2 === 0) {
//       this.setPresent();
//     } else {
//       this.setAbsent();
//     }
//   }
//   console.dir(this);
//   this.summary();
// };

// //  Примеры студентов
// const viktor = new Student("Viktor", "Chystiakov", 1993);
// const dima = new Student("Dima", "Pupkin", 1992);
// const vova = new Student("Vova", "Ivanow", 1991);

// viktor.generate();
// dima.generate();
// vova.generate();

//////////////////////////////////////////////////////////////////////
// Класы

// class Person {
//   sex = "man";
//   static coutLegs = 4; 
//   #state = {
//     value : false,
//   }

//   fullName = function(){
//     return this.name
//   }
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//     console.log("constructor");
//   }
//   getYear(){
//     return new Date().getFullYear() - this.year;
//   }
//   get change(){
//     return this.#state
//   }
//   set change(value){
//     return this.#state.value = value
//   }
// }

// const Ivan = new Person("Ivan", 1993) 

// // 1 this = {}
// // 2 prototype = Person
// // 3 Ivan = происходит наследование 
// // 4 return this
// const obj = {
//   name: "comp",
//   price: 800,
// }
// const objectString = JSON.stringify(obj)
// localStorage.setItem("key", objectString) 
// const result = localStorage.getItem("key")

// console.log(JSON.parse(result));
// const table = {
//   legs: 4,
// }
// const ress = {
//   ...obj, 
// }
// console.log(ress);