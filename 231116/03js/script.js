//anime는 stagger
// delay를 보다 효과적으로 사용할 수 있도록 도와주는 역할을 의미한다.

anime({
  targets: "ul.menu li",
  translateX: 250,
  easing: "linear",
  loop: true,
  direction: "alternate",
  // delay: function (el, i, l) {
  //   return i * 100;
  // },
  //각각의 아이템 요소를 분절시키는 의미의 stagger이다.
  delay: anime.stagger(100),
  endDelay: anime.stagger(100),
});
