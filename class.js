// Класы

class Student {
  constructor(name, sername, year) {
    this.name = name;
    this.sername = sername;
    this.yearOfBirth = year;
    this.presents = new Array(30);
    this.marks = new Array(30);
  }
  // Сколько лет студенту
  get age() {
    return new Date().getFullYear() - this.yearOfBirth;
  }
  // Поиск свободной ячейки масива
  freeIndex(arrey, value) {
    const freeIndex = arrey.findIndex((value) => value === undefined);
    if (freeIndex === -1) return;
    arrey[freeIndex] = value;
  }
  //  Если студент был на занятии
  setPresent() {
    this.freeIndex(this.presents, true);
  }
  //  Если студент не был на занятии
  setAbsent() {
    this.freeIndex(this.presents, false);
  }
  //  Оценка студенту за занятие
  setMark(grade) {
    this.freeIndex(this.marks, grade);
  }
  //  Определение средней оценки за 30 занятий
  getAverage(array) {
    const avg = array.reduce((sum, val) => sum + val) / array.length;
    return +avg.toFixed(1);
  }

  // Проверяет среднюю оценку, и среднее посещение
  summary() {
    const mark = this.getAverage(this.marks);
    const presents = this.getAverage(this.presents);
    console.log(this.name);
    console.log("Оценка", mark);
    console.log("Посещение", presents);
    ///////////////////////////////////////////
    if (mark > 9 && presents > 0.9) {
      console.log("Ути какой молодчинка!");
    } else if (mark > 9 || presents > 0.9) {
      console.log("Норм, но можно лучше");
    } else if (mark < 9 && presents < 0.9) {
      console.log("Редиска!");
    } else {
      console.log("Eror");
    }
  }
  //  Генератор рандома
  random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  //  Прототип для автоматического заполнения посещений и оценок
  generate() {
    for (let i = 0; i < this.presents.length; i++) {
      const int = this.random(1, 10); // Рандом от 1 до 10 включительно
      this.setMark(int);
      if (int % 2 === 0) {
        this.setPresent();
      } else {
        this.setAbsent();
      }
    }
    console.dir(this);
    this.summary();
  }
}
//  Примеры студентов
const viktor = new Student("Viktor", "Kozachenko", 1993);
const dima = new Student("Dima", "Pupkin", 1992);
const vova = new Student("Vova", "Ivanow", 1991);

viktor.generate();
dima.generate();
vova.generate();

//////////////////////////////////////////////////////////////////////
