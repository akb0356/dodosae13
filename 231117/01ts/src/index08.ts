// 세상의 모든 코드가 객체지향의 친절한 형태로 개발되지는 않기 때문.
// class 생성하는 이유 반복되는 '객체' 만들고 싶을 때
//함수는 결국 객체이다.
//아니 걍 js 모든 요소는 객체이다.
let add = new Function("a", "b", "return a+b");
let result = add(1, 2);
console.log(result);

function add(a: number, b: number) {
  return a + b;
}

console.log(add(10, 20));

let add2 = () => {
  let add2 = function (a: number, b: number) {
    return a + b;
  };
};

console.log(add2(20, 20));

// 함수가 1급 시민인 이유
// 자바스크립트에서 함수는 변수에 할당 가능
// 다른함수의 인자값 = 매개변수로 사용가능 = 콜백함수
// 반환값으로도 함수를 줄 수 있어서.
