class Media {
    constructor(_title) {
      this._title = _title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(value) {
      if (typeof value === "boolean") {
        this._isCheckedOut = value;
      } else {
        throw new Error("isCheckedOut must be boolean");
      }
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating() {
      const total = this._ratings.reduce(
        (accum, current) => accum + current, 0
      );
      return total/this._ratings.length
    }
  
    addRating(rating) {
      this._ratings.push(rating)
    }
  }
  
  const example = new Media("Hola mundo!");
  console.log(example.title);
  console.log(example.isCheckedOut);
  console.log(example.ratings);
  
  example.isCheckedOut = true;
  console.log(example.isCheckedOut);
  
  example.toggleCheckOutStatus();
  console.log(example.isCheckedOut);
  
  example.addRating(8);
  example.addRating(10);
  console.log(example.getAverageRating())
  
  // class Book
  class Book extends Media{
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author(){
      return this._author;
    }
  
    get pages(){
      return this._pages;
    }
  }
  
  const book = new Book('The Silmarillion', 'J. R. R. Tolkien', 480);
  console.log(book.author)
  console.log(book.pages)
  
  // Movie class
  
  class Movie extends Media {
    constructor(title, director, runtime) {
      super(title);
      this._director = director;
      this._runtime = runtime;
    }
  
    get director() {
      return this._director;
    }
  
    get runtime() {
      return this._runtime;
    }
  }
  
  const movie = new Movie('The Hobbit: An Unexpected Journey', 'Peter Jackson', 169)
  console.log(movie.director)
  console.log(movie.runtime)