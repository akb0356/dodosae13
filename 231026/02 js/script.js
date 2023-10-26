// class 생성자 함수

// class book() {
//   constructor(a, b, c)
//   this.a = a;
//   this.b = b;
//   this.c = c;
// }

// 프로토타입 객체 생성 => book 이라는 프로토타입의 객체가 생성된다!
// 해당 프로토타입의 객체를 활용하여 인스턴스 객체를 생성.
// => let contents = new book()

// class Book {
//   constructor(title, pages, done) {
//     this.title = title;
//     this.pages = pages;
//     this.done = done;
//     this.finish = function () {
//       this.done === false ? (str = "읽는 중") : (str = "완독");
//       return str;
//     };
//   },
// };

// const book1 = new Book("자바스크립트", 648, false);
// console.log(book1);

//book1.__proto__ 하면 프로토타입이 나온다.

class Book {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }
}
// function Book(title, pages, done) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
// }

Book.prototype.finish = function () {
  this.done === false ? (str = "읽는중") : (str = "완독");
  return str;
};

const book1 = new Book("자바스크립트", 687, false);
console.log(book1, finish());
