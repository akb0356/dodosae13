const elements = document.querySelectorAll("*");

for (let element of elements) {
  element.addEventListener(
    "click",
    (e) => {
      // currentTarget :: 이벤트와 연결성을 가지고 있는 요소들을 찾고 싶을 때 .target:: 이벤트가 실제 발생된 요소를 찾고자 할 때
      console.log(
        `event.target : ${e.target.tagName}, event.currentTarget : ${e.currentTarget.tagName}`
      );
    },
    true
  );
}
// 이벤트 캡처링 :: 가장 위에 위치한 요소부터 가장 아래 위치한 요소까지 이벤트가 전파되는 형태
