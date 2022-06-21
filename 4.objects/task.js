function Student(name, gender, age) {
  
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const student01 = new Student('Ahmad', 'male', 21);
const student02 = new Student('Mahmud', 'male', 19);
const student03 = new Student('Zahra', 'female', 22);
const student04 = new Student('Fatemeh', 'female', 18);
const student05 = new Student('Ali', 'male', 20);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [...marks];
  } else {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function() {
  const average = this.marks.reduce((acc, item, idx, arr) => {
    if (idx === arr.length - 1) {
      return (acc + item) / arr.length;
    } else {
      return acc + item
    }
  });
  return average
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
};

// ваш код для остальных методов

// My tests

// console.log(student05);

// student01.setSubject("Algebra");
// console.log(student01);

// student01.addMark(5);
// student01.addMark(4);
// student01.addMark(3);
// console.log(student01);
// console.log(student01.getAverage())

// student02.setSubject("Geometry");
// student02.addMarks(2, 3, 4);
// console.log(student02)

// student03.exclude('low grades');
// console.log(student03)