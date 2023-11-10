$(function () {
  $("#inner_1 p:contains(내용1)").css({
    background: "#ff0",
  });
  $("#inner_1 p:has(strong)").css({
    background: "#0ff",
  });
  //closest와 반대, 요소 선택자의 하위 요소들을 찾아옴
  $("#outer_wrap").contents().css({
    border: "1px dashed #f00",
  });
  $("#inner_2 p").not(":first").css({
    background: "#f0f",
  });
  //메서드 체이닝의 순수 요소 필터링이 잡히기 전의 순수요소 스타일 적용
  $("#inner_2 p").eq(2).end().css({
    color: "aqua",
  });
});
