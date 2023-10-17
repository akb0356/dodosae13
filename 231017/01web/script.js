$(".title").click(function () {
  // toggleClass :: 매개변수가 있다면 부여, 없다면 제거하는것.
  $(this).toggleClass("active");
  // 그럼 그때 선택되지 않은 클래스값을 회수하는것.
  // 선택 태그의 바로 다음에 오는 것에도 active를 줄지말지 정하는 태그.
  $(this).next().toggleClass("active");
  // 이미지변경
  let dataImage = $(this).attr("data-image");
  // 속성값을 가져오고 싶을 때 attr
  $(".image img").attr("src", dataImage);
});
