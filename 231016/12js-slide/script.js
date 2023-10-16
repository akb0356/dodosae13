let num = 1;
// 0이라는 숫자는 거짓을 의미, 1은 참을 의미한다.
function gallery(direct) {
  if (direct) {
    if (num == 8) return;
    num++;
  } else {
    if (num == 1) return;
    num--;
  }
  let imgTag = document.querySelector("#photo");
  // 객체의 속성값을 바꿔주는 메서드
  imgTag.setAttribute("src", "../img/2/pic_" + num + ".jpg");
}
