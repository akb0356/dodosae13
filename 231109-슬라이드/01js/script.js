// 정의해야하는 요소들
const sliderWrapper = document.querySelector(".container");
const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const navPrev = document.querySelector("#prev");
const navNext = document.querySelector("#next");

// container를 찾아와서 컨텐츠의 높이에 따라 각각의 높이도 변경시켜줘야함
// 반복문을 사용하여 인덱스값이 왼쪾 누르면 -1 오른쪾 누르면 +1을 하여 반복적으로 바뀌어지게 설정한다.
const slideCount = slides.length;
let currentIndex = 0;
let topHeight = 0;

//개별슬라이드 높이값 지정 함수

const calculateTallestSlide = () => {
  for (let i = 0; i < slideCount; i++) {
    if (slides[i].offsetHeight > topHeight) {
      topHeight = slides[i].offsetHeight;
    }
  }
  sliderWrapper.style.height = `${topHeight}px`;
  sliderContainer.style.height = `${topHeight}px`;
};
calculateTallestSlide();

//개별슬라이드 가로 배열
for (let i = 0; i < slideCount; i++) {
  slides[i].style.left = `${i * 100}%`;
}

//버튼기능업데이트함수
const updateNav = () => {
  // 인덱스가 처음인 경우
  if (currentIndex === 0) {
    navPrev.classList.add("disabled");
  } else {
    navPrev.classList.remove("disabled");
  }
  // 인덱스가 마지막인 경우
  if (currentIndex === slideCount - 1) {
    navNext.classList.add("disabled");
  } else {
    navNext.classList.remove("disabled");
  }
};

//슬라이드이동함수
const gotoslide = (i) => {
  sliderContainer.style.left = `${i * -100}%`;
  sliderContainer.classList.add("animated");
  currentIndex = i;
  // updateNav();
};

// 버튼클릭이벤트
navPrev.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex > 0) {
    gotoslide(currentIndex - 1);
  } else {
    gotoslide(slideCount - 1);
  }

  //처음이 아닌경우
  gotoslide(currentIndex - 1);
});
// 인덱스 값의 마지막이 아닌 경우
navNext.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex < slideCount - 1) {
    gotoslide(currentIndex + 1);
  } else {
    gotoslide(0);
  }
});

//웹브라우저 화면이 시작될 때 저으이
gotoslide(0);
