$(function () {
  $("#main_navigation a").click(function () {
    let target = $(this).attr("data-target");
    //data name에 있는 target 을 제외한 애들의 active 클래스를 제거해줘(선택되지 않은 애들에게 붙어있는 active를 지워줘)
    $(`:not([data-name=${target}])`).removeClass("active");
    //선택된 친구에게만 active 부여해야지?
    $(`[data-name = ${target}]`).addClass("active");
  });

  let currentPosition = 1;
  $("#character > a:nth-child(1)").click(function () {
    currentPosition -= 1;
    if (currentPosition < 1) {
      currentPosition = 3;
    }
    $("article").removeClass("show");
    $(`article:nth-of-type(${currentPosition})`).addClass("show");
  });
  $("#character > a:nth-child(2)").click(function () {
    currentPosition += 1;
    if (currentPosition > 3) {
      currentPosition = 1;
    }
    $("article").removeClass("show");
    $(`article:nth-of-type(${currentPosition})`).addClass("show");
  });
});
