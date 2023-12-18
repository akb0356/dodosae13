$(function () {
  //Header Scroll Change
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });

  //Trigger;
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $(".mobheader-gnbwrap").toggleClass("active");
  });
  $(".mobheader-gnbwrap a").click(function () {
    $(".mobheader-gnbwrap, .trigger").removeClass("active");
  });
});

//Header Gnb
// $(function () {
//   $(".header-gnb").on("mouseover", function () {
//     $("header-lnbwrap").stop().slideUp(200);
//     $(this).children("header-lnbwrap").stop().slideDown(200);
//     $("header-lnb").stop().slideUp(200);
//     $(this).children("header-lnb").stop().slideDown(200);
//   });

//   $(".header-gnb").on("mouseleave", function () {
//     $(this).children("header-lnbwrap").stop().slideUp(200);
//     $(this).children("header-lnb").stop().slideUp(200);
//   });
// });
