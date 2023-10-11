for (let a = 1; a <= 5; a++) {
  document.write(`<h2>[${a}단]</h2>`);
  for (let b = 1; b <= 9; b++) {
    document.write(`${a}x${b} = ${a * b} <br/>`);
  }
}
