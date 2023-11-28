//미리약속
// 만약 너가 지금 실행하고자하는 명령문 성공하게되면 a가 나오게하고 만약 이게 실패하게 되면 b가 나오게하자
// 콜백함수는 일방적인 원웨이,
//promise js 내장객체 = class생성자로 만들어짐 => prototype이라는 함수가 존재 => prototype 객체가 존재한다는 것, 그것은  => instance 객체가 생성된다.
//prototype 객체 => instance 객체 생성

//resolve도 함수
const pizza = new Promise((resolve, reject) => {
  if (false) {
    resolve("피자를 주문합니다.");
  } else {
    reject("피자를 주문하지 않습니다!");
  }
});

console.log(pizza);

//finally는 끝나건 끝나지않건 무조건 마지막에 완료로 끝내라는 의미
pizza
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("완료");
  });
