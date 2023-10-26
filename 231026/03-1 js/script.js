// 프로토타입을 상속하는 새로운 객체

// 1. 고전적인 방식 생성자 함수를 활용해 객체 생셩.
// 2. class를 활용한 생성자 함수를 만들어서 객체를 생성.

//Book이라는 생성자 함수 정의
function Book(title, price) {
  this.title = title;
  this.price = price;
}

//Book이라는 생성자 함수에 새로운 메서드(*함수)를 정의하고 삽입
Book.prototype.buy = function () {
  console.log(`${this.title}을 ${this.price}원에 구매하였습니다.`);
};

//생성자 함수를 통해서 생성된 Book이라는 프로토타입의 객체를 활용하여 인스턴스 객체를 생성.
const book1 = new Book("해리포터", 30000);
book1.buy();

// 비효율적
// function Textbook(title, price, major) {
//   this.title = title;
//   this.price = price;
//   this.major = major;
// }
function Textbook(title, price, major) {
  Book.call(this, title, price);
  this.major = major;
}
Textbook.prototype.buyTextbook = function () {
  console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다.`);
};

//두개의 생성자 함수를 연결시킴.
Object.setPrototypeOf(Textbook.prototype, Book.prototype);

const book2 = new Textbook("자바스크립트", 20000, "컴퓨터공학");
book2.buyTextbook();
//안통하는 이유, textbook에 생성자 함수 안에 정의된 것이 아니라서 안되는 것. 쓰고싶다면 다른 두가지 생성자 함수를 연결시켜주어야한다.
book2.buy();
