$(function () {
  let trigger = $("#trigger");
  let menu = $("nav ul");
  $(trigger).on("click", function (e) {
    e.preventDefault();
    menu.slideToggle();
  });
  // 변수코드
  $(window).resize(function () {
    let w = $(window).width();
    if (w > 320 && menu.is(":hidden")) {
      menu.removeAttr("style");
    }
  });
});
