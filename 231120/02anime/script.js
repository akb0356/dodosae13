let path = anime.path(".svg path");

anime({
  targets: ".circle",
  translateX: path("x"),
  translateY: path("y"),
  rotate: path("angle"),
  easing: "linear",
  duration: 2000,
  loop: true,
});
