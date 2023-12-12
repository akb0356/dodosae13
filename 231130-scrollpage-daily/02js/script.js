//우리가 정의해야할 요소!
// 1. 스크롤 위치 2. 각각의 도형 이미지 3. 현재 마우스 위치 좌표값 4. 마우스가 이동했을 때 이동한 위치까지 따라가야하는 target 값 5. 목표값 대비, 타겟값이 따라오는 속도 정의

let scrollNum = 0;
//마우스의 위치 좌표값
let x = 0;
let targetX = 0;
let speed = 0;

const imgAll = document.querySelectorAll(".imageWrap .parallaxImage");
const totalNum = imgAll.length;
const subPageimg = document.querySelector(".subPage .parallaxImage");

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  imgAll.forEach((item, index) => {
    if (index < 4) {
      item.style.transform = `translateY(${
        -scrollNum / (2 * (totalNum - index))
      }px)`;
    }
  });
});
window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  imgAll[4].style.transform = `scale(1.05) translate(${-targetX / 200}px, ${
    -scrollNum / (2 * (totalNum - 4))
  }px)`;
  imgAll[5].style.transform = `scale(1.05) translate(${-targetX / 100}px, ${
    -scrollNum / (2 * (totalNum - 5))
  }px)`;
  subPageimg.style.transform = `scale(1.1) translateX(${-targetX / 20}px)`;
  window.requestAnimationFrame(loop);
};
loop();
