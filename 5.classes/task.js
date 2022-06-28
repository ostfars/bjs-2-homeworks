// Task #1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(state) {
    if (state < 0) {
      this._state = 0;
    } else if (state > 100) {
      this._state = 100;
    } else {
      this._state = state;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = 'detective';
  }
}

// Task #2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book)
    }
  }
  
  findBookBy(type, value) {
    let result = null;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        result = this.books[i];
      } 
    }
    return result;
  }

  giveBookByName(bookName)  {
    let result = null;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        result = this.books[i];
        this.books.splice(i, 1);
      } 
    }
    return result;
  }
}

// Task #3

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.subjects = {};
    this.isExcluded = '';
  }

  addMark(mark, subject) {
    if (mark < 1 || mark >5) {
      return 'Ошибка, оценка должна быть числом от 1 до 5'
    } else {
      if (this.subjects[subject] === undefined) {
        this.subjects[subject] = [mark];
      } else {
        this.subjects[subject].push(mark);
      }
    }
  }

  getAverageBySubject(subject) {
    let result;
    if (this.subjects[subject] === undefined) {
      return 'Несуществующий предмет'
    } else {
      result = this.subjects[subject].reduce((a, b) => a + b, 0) / this.subjects[subject].length;
    }
    return result;
  }
    
  getAverage() {
    const averages = [];
    for (let subject in this.subjects) {
      averages.push(this.getAverageBySubject(subject))
    }
    return averages.reduce((a, b) => a + b, 0) / averages.length;
  }

  exclude(reason) {
    this.isExcluded = reason;
    return reason;
  }
}