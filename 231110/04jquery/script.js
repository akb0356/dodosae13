$(function () {
  $("#wrap a[target]").css({
    color: "#f00",
  });
  //무언가로 시작할 때
  $("#wrap a[href^=https]").css({
    color: "#0f0",
  });
  //무언가로 끝날 때
  $("#wrap a[href$=net]").css({
    color: "magenta",
  });
  // 단 하나라도 google이라는 요소가 포함되어있다면
  $("#wrap a[href*=google]").css({
    color: "#000",
  });
  $("#member_f :text").css({
    "background-color": "#ff0",
  });
  $("#member_f :password").css({
    "background-color": "#0ff",
  });
});
