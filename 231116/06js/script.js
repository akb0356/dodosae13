//stagger : 순차적으로!

anime({
  targets: "ul li",
  translateY: function (el, i) {
    if (i % 2 === 0) {
      return 80;
    } else {
      return -80;
    }
  },
  easing: "linear",
  duration: 1500,
  opacity: 1,
});

//해당 8개의 도형이 안보이다가 서서히 나타날 수 있도록 코드를 수정해보세요.
