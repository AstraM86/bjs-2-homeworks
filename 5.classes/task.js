class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = state;
		this.type = type;
	}
	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}
	get state() {
		return this._state;
	}
	fix() {
		this.state *= 1.5;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = "magazine") {
		super(name, releaseDate, pagesCount, state, type);
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = "book") {
		super(name, releaseDate, pagesCount, state, type);
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = "novel") {
		super(author, name, releaseDate, pagesCount, state, type);
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = "fantastic") {
		super(author, name, releaseDate, pagesCount, state, type);
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = "detective") {
		super(author, name, releaseDate, pagesCount, state, type);
	}
}
//Задача 2

class Library {
	constructor(name, books = []) {
		this.name = name;
		this.books = [...books];
	}
	addBook(book) {
		if (book?.state > 30) {
			this.books.push(book);
		}
	}
	findBookBy(type, value) {
		return this.books.find(book => book[type] === value) || null;
	}
	giveBookByName(bookName) {
		const index = this.books.findIndex(book => book?.name === bookName);
		if (index !== -1) {
			return this.books.splice(index, 1)[0];
		}
		return null;
	}
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) return;

    if (!this.marks[subject]) {
      this.marks[subject] = [];
    } 
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks[subject] || this.marks[subject].length === 0) return 0;

    let sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks[subject].length;
  } 
  getAverageBySubject(subject) {
    return this.marks[subject] && this.marks[subject].length > 0
    ? this.marks[subject].reduce((acc, mark) => acc + mark, 0) / this.marks[subject].length : 0; 
  }
    /*if (!this.marks[subject] || this.marks[subject].length === 0) return 0;

    let sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0); 
  } */

  getAverage() {
    let subjects = Object.keys(this.marks);
    
    if (subjects.length === 0) return 0;

    const totalAverage = subjects.reduce((acc, subject) => {
      return acc + this.getAverageBySubject(subject);
    }, 0);

    return totalAverage / subjects.length;
  }
}