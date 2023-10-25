$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });
});
$(".trigger").click(function () {
  $(this).toggleClass("active");
  $(".gnb").toggleClass("active");
});
$(".gnb a").click(function () {
  $(".gnb, .trigger").removeClass("active");
});

$("#fullpage").fullpage({
  menu: "#topMenu",
  anchors: ["intro1", "aboutMe1", "skills1", "work1", "contact1"],
});
