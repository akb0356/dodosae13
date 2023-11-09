// $(document).ready(function() {
//   $("*").css("border", "1px solid #00f")
// })
//실무에서는 약식을 더 많이 씁니다.
$(function () {
  $("*").css("border", "1px solid #00f");
  $("#tit").css("background", "#ff0").css("color", "#f00");
  $(".tit2").css("background", "#f0f").css("border", "2px dashed #fff");
  $("h3").css("background", "#0ff");
  $("tit3, h4").css("color", "#f00");
  //종속선택자
  $("h2.tit4").css("background", "gray").css("color", "#fff");
});
