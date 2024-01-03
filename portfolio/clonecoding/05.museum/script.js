// mainSlider
const slideWrapper = document.querySelector(".mainSlide");
const sliderContainer = document.querySelector(".mainSlide-wrapper");
const slides = sliderContainer.querySelectorAll(".main-slide");
const slideCounts = slides.length;
const pager = document.querySelector(".mainSlide-pagination-wrapper");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const slideBtn = pager.querySelector("button");
let currentIndex = 0;
let pagerHTML = "";

for (let i = 0; i < slideCounts; i++) {
  slides[i].style.left = `${i * 100}%`;
  pagerHTML += `<span data-idx="${i}">${i + 1}</span>`;
  pager.innerHTML = pagerHTML;
}
const pagerBtn = pager.querySelectorAll("span");

const goToslide = (i) => {
  sliderContainer.classList.add("animated");
  currentIndex = i;
  sliderContainer.style.left = `${i * -100}%`;
  for (let i = 0; i < pagerBtn.length; i++) {
    pagerBtn[i].classList.remove("active");
  }
  pagerBtn[i].classList.add("active");
};

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex > 0) {
    goToslide(currentIndex - 1);
  } else {
    goToslide(slideCounts - 1);
  }
});
nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex < slideCounts - 1) {
    goToslide(currentIndex + 1);
  } else {
    goToslide(0);
  }
});

for (let i = 0; i < pagerBtn.length; i++) {
  pagerBtn[i].addEventListener("click", (e) => {
    let pagerNum = e.target.innerText - 1;
    goToslide(pagerNum);
  });
}
