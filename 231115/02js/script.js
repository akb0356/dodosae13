const body = document.querySelector("body");
const nav_btn = document.querySelector("#nav_icon");
const sec2_Title = document.querySelector("#sec2 h1.title");
const sec2_slider = document.querySelector("#sec2 .slider_wrap");

nav_btn.addEventListener("click", (e) => {
  body.classList.toggle("nav_active");
});

const sec2 = () => {
  //cssText는 해당 객체 노드 스타일을 통으로 바꿔준다.
  sec2_Title.style.cssText = `  opacity: 1;
  transform: translateX(50px);`;
  sec2_slider.style.cssText = `  opacity: 1;
  transform: translateX(-50px);`;
};

const sec2_reset = () => {
  sec2_Title.style.cssText = `  opacity: 0;
  transform: translateX(-50px);`;
  sec2_slider.style.cssText = `  opacity: 0;
  transform: translateX(50px);`;
};

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"],
  afterLoad: (old_elem, new_elem, direction) => {
    // fullpage 모든 section이 배열로 되어있음을 알 수 있음. direction으로 올렸는지 내렸는지 방향도 알 수 있다.
    // 2번 섹션에 들어가면 안녕출력해줘
    if (new_elem.index === 2) {
      sec2();
      console.log("section 2 Hello!");
    }
    //2번 섹션에 들어가면 잘가 출력해줘.
    if (old_elem.index === 2) {
      sec2_reset();
      console.log("section2 Goodbye");
    }
  },
});
