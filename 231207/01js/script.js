//js에서 함수를 선언, 호출, 실행
// const foo = () => {
//   console.log("foo");
// };
// const bar = () => {
//   console.log("bar");
// };

// foo();
// bar();

// 웹브라우저에서는 3개의 언어밖에 실행을 못한다.
// 실행컨텍스트스택(싱글스레드) :: 결국 js는 먼저 선언된 함수를 실행할 수 밖에 없는 싱글스레드 방식의 형식이다.(원웨이)
// 전역요소 컨텍스트인지 확인한다.(확인) => 함수를 실행하라는 호출이 나왔다.(foo라는 함수를 실행을 결정짓는 foo()가 선언됨) => 그 다음 bar()가 진행되게 나온다.

// const sleep = (func, delay) => {
//   //today는 타임워치를 누르면 타임워치의 버튼을 누른 해당 시점.
//   const today = new Date();
//   const delayUntil = today.now() + delay;
//   while (today < delayUntil);
//   func();
// };

// sleep(foo, 3000);
// sleep이 먼저 실행이 된다. 3초의 시간동안 func가 실행이 되지 못하게 delay 해준다.

//비동기처리방식
const foo = () => {
  console.log("foo");
};
const bar = () => {
  console.log("bar");
};

setTimeout(foo, 3000);
bar();
