const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45;

// 45씩 중심축을 기준으로 원형으로 정렬하고 이미지가 바뀌게끔 하는 내용
let i = 0;
for (let el of lists) {
  let pic = el.querySelector(".pic");
  el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  pic.style.background = `url(../contents/img/member${i + 1}.jpg)`;
  i++;

  // on이라는 클래스를 가지고 있을 때 재생이 되게 하는 내용
  let play = el.querySelector(".play");
  let pause = el.querySelector(".pause");
  let load = el.querySelector(".load");
  play.addEventListener("click", (e) => {
    // 실제로 이벤트 선택된 건 플레이지만 그 상위 요소까지 끌고올 때
    let isActive = e.currentTarget.closest("article").classList.contains("on");
    if (isActive) {
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.add("on");
      e.currentTarget.closest("article").querySelector("audio").play();
    }
  });
  pause.addEventListener("click", (e) => {
    // 실제로 이벤트 선택된 건 플레이지만 그 상위 요소까지 끌고올 때
    let isActive = e.currentTarget.closest("article").classList.contains("on");
    if (isActive) {
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.remove("on");
      e.currentTarget.closest("article").querySelector("audio").pause();
    }
  });
  load.addEventListener("click", (e) => {
    // 실제로 이벤트 선택된 건 플레이지만 그 상위 요소까지 끌고올 때
    let isActive = e.currentTarget.closest("article").classList.contains("on");
    if (isActive) {
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.add("on");
      e.currentTarget.closest("article").querySelector("audio").load();
      e.currentTarget.closest("article").querySelector("audio").play();
    }
  });
}

// page 돌아가는 내용
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const audio = document.querySelectorAll("audio");

let active = 0;
let num = 0;
let len = lists.length - 1;
let activation = (index, lists) => {
  for (let el of lists) {
    el.classList.remove("on");
  }
  lists[index].classList.add("on");
};

let initMusic = () => {
  for (let el of audio) {
    el.pause();
    el.load();
    // 해당 오디오 요소의 부모요소인 article에서 직전단계 실행되고 있던 형제 요소를 찾는다.
    el.parentElement.previousElementSibling.classList.remove("on");
  }
};

prev.addEventListener("click", () => {
  initMusic();
  num++;
  frame.style.transform = `rotate(${deg * num}deg)`;
  active == 0 ? (active = len) : active--;
  activation(active, lists);
});

next.addEventListener("click", () => {
  initMusic();
  num--;
  frame.style.transform = `rotate(${deg * num}deg)`;
  active == len ? (active = 0) : active++;
  activation(active, lists);
});
