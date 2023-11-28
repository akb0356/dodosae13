//도착지점의 x좌표
let x = 0;

//타겟아이템의 좌표 = 마우스 이동에 따른 좌표변화
let targetX = 0;

//마우스 이동에 따른 타겟아이템의 이동속도
const speed = 0.1;

//실제 이동할 마우스 이벤트로 움직일 이미지
const contentAll = document.querySelectorAll(".contentWrap img");
const [shadow, date, artist, txtimg] = contentAll;

//마우스 이동에 의한 이벤트 적용
window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  shadow.style.transform = `translateX(${targetX / 35}px)`;
  date.style.transform = `translateX(${targetX / 20}px)`;
  artist.style.transform = `translateX(${-targetX / 20}px)`;
  txtimg.style.transform = `translateX(${-targetX / 20}px)`;
  window.requestAnimationFrame(loop);
};
loop();
