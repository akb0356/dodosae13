//생성기와 동일한 결과값을 만들어내는 setInterval 함수는 세미코루틴 = semi-coroutine 방식이라고 함!
//반도체 : semiconductor :: 전기가 흘렀을 때 전기를 절반만 통과시키는 도체
//특정 조건에 부합하면 실행은 된다. 하지만, 그것이 무한으로 반복실행은 불가.
// 조건값이 주어지지 않으면 단일 실행 후 바로 종료
//코루틴 :: 처음 컴퓨터라는 기계가 탄생되었을 때 컴퓨터라고해서 처음부터 동시다발적으로 모든 명령을 실행할 수 없었음!
// 100개 실행문을 요청하면,  1개 => 2개 => 3개
// 스레드! => 싱글스레드
// 앞에있는 1번이 실행완료되면 알아서 2번이 싱행되게끔하고 3번이 실행되도록
// 어떠한 패턴 조건에 만족하면 자동으로 반복실행하도록 하는 프로세스 = 코루틴
// 비동기처리를 하기 위한 목적!
//js 태생, 동기처리밖에 못하는 싱글스레드방식이었기에 개선하기 위해 세미코루틴방식 고민, setInterval 함수 => 제너레이터 함수를 사용한 결과값처럼 동일하게 나옴. (*나오는 로직, 알고리즘이 다를 뿐)

const period = 1000;
let count = 0;
console.log(`program setDefaultResultOrder...`);

const id = setInterval(() => {
  if (count >= 3) {
    // setinterval 정지시키기
    clearInterval(id);
    console.log("program finished...");
  } else {
    console.log(++count);
  }
}, period);
