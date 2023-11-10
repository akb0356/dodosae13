$(function () {
  //요소선택자 안에 들어가 있는 애를 싹다 끌고옴
  $("#inner_1").find(".txt1").css({
    background: "#ff0",
  });
  //요소선택자로 필터링 할 애를 따로 구분해서 끌고옴
  $("#inner_1 p").filter(".txt2").css({
    background: "#0ff",
  });
  $("#inner_2 p")
    .filter(function (i, o) {
      console.log(i);
      return i % 2 === 0;
    })
    .css({
      background: "#f00",
    });
});
