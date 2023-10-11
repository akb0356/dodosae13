for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 7 != 0) {
    document.write(`<p class='red'>${i}</P>`);
  } else if (i % 7 == 0 && i % 5 != 0) {
    document.write(`<p class='green'>${i}</P>`);
  } else if (i % 7 == 0 && i % 5 == 0) {
    document.write(`<p class='blue'>${i}</P>`);
  }
}
