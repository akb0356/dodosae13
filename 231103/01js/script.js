// JS의 동기처리방식이 어떻게 이루어지는가

// const displayA = () => {
//   console.log("A");
// };
// const displayB = (callback) => {
//   //안에 콜백함수를 받을 수 있는, 일정시간 이후에 실행할 수 있음. a를 실행해 b초 이후에.
//   //때문에 C가 먼저 실행되고나서 B가 실행되기 때문에 js의 동기처리방식을 벗어난 비동기처리방식의 시작을 여는 아주 중요한 친구!
//   // 근데 비동기처리방식을 하면서도 ABC순서를 지켰으면 좋겠다면? () 안에 callback을 넣고 console.log 뒤에 callback을 실행시키고 displayb안에 매개변수로 displayc를 넣는다. 그럼으로 2초뒤에 실행되지만 c가 먼저 실행은 되지만 c는 b의 안에 있는 함수로 bc의 순으로 출력이 되는 것이다.
//   //JS는 1급시민, :: 조건 > 함수의 매개변수로 함수를 넣을 수 있어야함. 함수의 반환값으로 함수를 쓸 수 있음.
//   setTimeout(() => {
//     console.log("B");
//     callback();
//   }, 2000);
// };
// const displayC = () => {
//   console.log("C");
// };
// displayA();
// displayB(displayC);
// displayA();
// displayB();
// displayC();

//그렇다면 js에서 비동기처리방식이 지금까지 봐온 callback 함수말고는 없나요?
// 2015년도에 ES6문법이 나오면서 > promise / async&awit
// 2015년에 대체 뭔일이 있던거임? > 구글 크롬의 검색엔진 v9이 워낙 js를 파싱하는 능력이 워낙 뛰어났도다. 그리하여 많은 개발자들이 웹브라우저 안에서만 사용하기 너무 아깝다고 생각하여 나온 것이 node js (js 런타임)
// 그동안 백엔드 개발자들의 전유물이었던 것이 굳이 사용하지 않아도 node js 기반에서 js만으로도 충분히 서버를 구축하고 관리할 수 있는 시대가 열렸다!

// 콜백함수 예문

// 콜백함수를 이용한 비동기처리!
//coffee는 변수
const order = (coffee, callback) => {
  console.log(`${coffee} 커피 주문 접수`);
  setTimeout(() => {
    callback(coffee);
  }, 3000);
};
const display = (result) => {
  console.log(`${result} 준비완료`);
};
// 아메는 매개변수
order("아메리카노", display);




