const number = parseInt(prompt("숫자를 입력하세요!"));

const isPositive = (n) => {
  if (n > 0) {
    alert(`${n}은 양수입니다!`);
  } else if (n < 0) {
    alert(`${n}은 음수입니다!`);
  } else {
    alert(`${n}은 0입니다!`);
  }
};

if (!isNaN(number)) {
  isPositive(number);
}
