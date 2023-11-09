// $(function () {
//   $("#wrap > h1").css("border", "2px dashed #f00");
//   $("#wrap > section").children().css({
//     background: "yellow",
//     border: "2px solid #f00",
//   });
// });

// $(function () {
//   let style_1 = {
//     background: "#0ff",
//     border: "2px solid #f00",
//   };
//   let style_2 = {
//     background: "#ff0",
//     border: "2px dashed #f00",
//   };
//   $(".txt").prev().css(style_1);
//   $(".txt + p").css(style_2);
//   $(".txt").next().next().css(style_2);
// });
// $(function () {
//   let style_1 = {
//     background: "#0ff",
//     border: "2px solid #f00",
//   };
//   $("txt3").prevUntil(".title").css(style_1);
//   $("txt3").next(".title").css(style_1);
// });

$(function () {
  $(".txt1").parents().css({
    border: "2px solid #f00",
  });
  $(".txt2").parents("div").css({
    color: "#f00",
  });
});

