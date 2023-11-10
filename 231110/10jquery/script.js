$(function () {
  let srcVal = $("#sec_1 img").attr("src");
  console.log(srcVal);

  //속성 값을 가지고 있는 애를 객체로 받아와서 특정 값으로 대체하겠다.
  $("#sec_1 img").attr({
    src: srcVal.replace("1.jpg", "2.jpg"),
    width: 200,
  })
});
