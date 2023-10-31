let a = parseInt(prompt("숫자를 주세요"));

let s = (n) => {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
};

console.log(s(a));
