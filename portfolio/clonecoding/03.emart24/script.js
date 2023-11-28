const swiper = new Swiper(".magazine-sliderwrap", {
  loop: false,
  parallax: true,
  slidesPerView: 3,
  initialSlide: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  autoplay: false,
  observeParents: true,
  preventClicks: true,
  preventClicksPropagation: false,
  navigation: {
    nextEl: ".magazine-swiper-button-next",
    prevEl: ".magazine-swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 8,
    },
    744: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 8,
    },
    968: {
      slidesPerView: 1.7,
      slidesPerGroup: 1,
    },
    1040: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
  },
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
});
