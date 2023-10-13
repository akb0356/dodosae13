$(".color span").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
});
$(".like").click(function () {
  // 있으면 지우고 없으면 넣으라는 태그
  $(this).toggleClass("active");
});
