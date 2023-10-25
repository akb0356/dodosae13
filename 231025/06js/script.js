// 객체생성 또다른 방법
//생성자 함수 => 객체생성
// 붕어빵 틀을 만들어내는 개념
// 해단 붕어빵 틀을 통해 붕어빵을 무한으로 뽑을 수 있다.

//생성자함수::객체를 생성하는 함수 = 붕어빵틀 = 프로토타입

function Book(title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;

  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
    return str;
  };
}

//인스턴스 객체
let book1 = new Book("자바스크립트", 648, false);
console.log(`${book1.title} - ${book1.pages}쪽 - ${book1.finish()}`);

//생성자 함수를 통해 커스터마이징된 객체 생성방법
// 2015년 이후 많이 바뀜.
// 클래스를 사용해서 객체 만들기.

class Book5 {
  // 생성자함수
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }
  // 메서드
  finish() {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
    return str;
  }
}

let book6 = new Book5("자바스크립트", 698, false);
let book7 = new Book5("자바스크립트", 55, true);

console.log(`${book6.title}-${book6.pages}-${book6.done}`);
