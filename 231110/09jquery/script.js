$(function () {
  let result_1 = $("#sec_1").html();
  console.log(result_1);
  // 코드를 어떻게 끌고 올 것인가 구조설계를 해야한다.
  // 가져왔다면 어떠한 조건과 어떠한 방법을, 어떠한 함수를 사용할지 후반부의 설계를 이어서 하면 잘 할 수 있을거야~
  $("#sec_1 p").html('<a href="#">Text1</a>');
  console.log(result_1);

  let result_2 = $("#sec_2").text();
  console.log(result_2);
  $("#sec_2 h2").text("text()")
});
