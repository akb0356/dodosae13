// 심해 깊이를 나타내주는 텍스트 공간의 정의
const depth = document.querySelector(".depthwrap span");
//스크롤 위치에 따라 이동해야하는 바 정의
const progressBar = document.querySelector(".bar");
//크르롤 위치에 따라 이동하는 잠수함 정의
const submarine = document.querySelector(".submarine");
//스크롤 위치에 따라 문어 정의
const octo = document.querySelector(".octo");

//현재 스크롤 위치값
let scrollNum = 0;

//현재 문서의 길이값
let documentHeight = 0;

//문서 총 길이 대비, 스크롤 위치값의 %
let per = 0;

//퍼센트 계산기
const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0);
};

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight - window.innerHeight;
  per = percent(scrollNum, documentHeight) + "%";
  depth.innerText = scrollNum;
  depth.innerText = scrollNum.toFixed(0);
  progressBar.style.width = per;
  submarine.style.transform = `translateX(${per}%)`;
  octo.style.transform = `translateY(${-per}%)`;
});
