$("nav a").click(function (e) {
  // 선택한 앵커에서 잡힌 href에서 #까지 스크롤 시킨다. ||(or) 특정 해시가 없으면 0(위치변화를 주지 않는다.), 있다면 1500밀리초 속도로 페이지로 이동하라는 의미.
  $.scrollTo(this.hash || 0, 1500);
  // 기본 가지고 있는 속성들을 무력화 시키는 태그
  e.preventDefault();
});
