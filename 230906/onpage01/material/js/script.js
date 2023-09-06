$(function () {
  $("nav a").click(function () {
    $.scrollTo(this.hash || 0, 1500);
    e.preventDefault();
    // /0 은 위치, 1500은 초. 1초가 1000/
  });
});
