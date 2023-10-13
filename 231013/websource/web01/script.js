$(".testimonial-pic img").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
  $(".testimonial .contents").removeClass("active");
  $("#" + $(this).attr("data-alt")).addClass("active");
});
