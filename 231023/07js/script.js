const box = document.querySelector("#box");
box.addEventListener("click", (e) => {
  // 일정 페이지 안 구간의 위치를 추적하고 싶으면 e.page~ 값을 쓴다.
  alert(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);
  // 전체 웹브라우저의 값을 추적하고 싶을 때
  console.log(`이벤트 발생 위치 : ${e.screenX}, ${e.screenY}`);
});
