let count = 0;
myFnc();

function myFnc() {
  count++;
  document.write(`hello ${count}, <br/>`);
}
myFnc();

// 상식적으로 프로그램 언어에서 선언 전에 호출은 말이 안된다, 클래스 함수는 말이 안되는 것이 된다. 대신 화살표 함수는 최신 언어라 사용할 때 호이스팅이 불가능하다.

let theFnc = () => {
  count++;
  document.write(`bye ${count}`);
};

theFnc();
