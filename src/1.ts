/*
  Клас Student, який містить три властивості: name, age та grade. 
  Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення, 
  напишіть скорочену ініціалізацію.
*/

class Student {
  constructor(public name: string, private age: number, private grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  showName() {
    console.log("name", this.name);
  }
  showAge() {
    console.log("age", this.age);
  }
  showGrade() {
    console.log("grade", this.grade);
  }
}

// ============================================
const student = new Student("Liza", 44, "rrhr");
console.log("student", student);

student.showName();
student.showAge();

const studentCopy = {
  name: "John",
  age: 22,
  grade: "ssss",
  showName: student.showName,
  showAge: student.showAge,
  showGrade: student.showGrade,
};
console.log("studentCopy", studentCopy);
studentCopy.showName();
studentCopy.showAge();
studentCopy.showGrade();
