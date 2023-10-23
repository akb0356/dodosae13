const container = document.querySelector("#container");
const arrows = document.querySelectorAll(".arrow");
const pics = [
  "pic-1.jpg",
  "pic-2.jpg",
  "pic-3.jpg",
  "pic-4.jpg",
  "pic-5.jpg",
  "pic-6.jpg",
];
container.style.background = `url(/img/${pics[0]})`;
let i = 0;
// 배열 안에 있는 아이템을 하나씩 가져와서 반복, 함수 안에 함수를 넣을 수 있는 함수.
arrows.forEach((arrow) => {
  // 참조변수로 이벤트를 사용해야 컴퓨터는 얘가 이벤트가 발생했구나 알 수 있다.
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = pics.length - 1;
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= pics.length) {
        i = 0;
      }
    }
    container.style.background = `url(/img/${pics[i]})`;
  });
});


// contextmenu :: 우클릭을 했을 시 나오는 창.
window.addEventListener("contextmenu", (e) => {
  // 기본적으로 가지고 있는 속성을 무력화 시키는 값
  e.preventDefault();
  alert(`오른쪽 버튼을 사용할 수 없습니다.`);
});
