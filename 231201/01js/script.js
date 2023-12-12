//무엇을 정의해야하는가
// 마우스 스크롤 휠 이동에 따른 스크롤값
// 상단부의 7장 이미지 각각에 대한 정의

//스크롤 이동에 따른 위치값
let scrollNum = 0;

//총 7장의 이미지 정의
const imgAll = document.querySelectorAll(".imageWrap .parallaxImage");

//해당 아이템 7장의 이미지 수 정의
const totalNum = imgAll.length;

//마우스스크롤 휠 이동에 따른 이벤트 정의
window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  if (scrollNum < 2500) {
    imgAll.forEach((item, index) => {
      item.style.transform = `perspective(400px) translate3d(0, 0, ${
        (scrollNum / 2) * (totalNum - index)
      }px)`;
    });
  }
});
