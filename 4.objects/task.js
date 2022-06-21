function Student(name, gender, age) {
    // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const student1 = new Student(Ahmad, male, 21);
const student2 = new Student(Mahmud, male, 19);
const student3 = new Student(Zohra, female, 22);
const student4 = new Student(Fatemeh, female, 18);
const student5 = new Student(Ali, male, 20);

Student.prototype.setSubject = function (subjectName) {
  //ваш код
};

// ваш код для остальных методов