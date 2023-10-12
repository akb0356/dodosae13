// JS 객체 : 자료를 저장하고 처리하는 기본 단위.

// let shoeDog = {
//   author: "Phil knight",
//   category: "social",
//   pages: 500,
//   price: 19800,
// };

let tv = new Object();
// object 할당했기 때문에 tv를 객체로 만들 수 있게 되었다.
tv.color = "white";
// color 라는 key에 white라는 value를 할당
tv.price = 300000;
// info에는 tv색상과 가격을 출력해주는 함수를 넣음.
tv.info = function () {
  document.write(`tv 색상 : ${tv.color} <br />`);
  document.write(` tv 가격 : ${tv.price}원`);
};
document.write(`<h1>tv 객체 메서드 호출</h1>`);
tv.info();

let car = {
  color: "black",
  price: 5000000,
  info: function () {
    document.write(`car 색상 : ${car.color} <br />`);
    document.write(` car 가격 : ${car.price}원`);
  },
};
document.write(`<h1>car 객체 메서드 호출</h1>`);
car.info();
