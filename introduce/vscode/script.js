$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });
});
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".sidebar").addClass("active");
    } else {
      $(".sidebar").removeClass("active");
    }
  });
});
