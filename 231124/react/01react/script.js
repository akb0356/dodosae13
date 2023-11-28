const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const result = document.querySelector("#result");

//명령형 프로그래밍 코드는 다음과 같이 중복되는 값이 많아서 row level의 코드로 보인다.
minus.addEventListener("click", () => {
  //current라는 공간에 10진수 기준의 숫자형의 값을 가져와서 저장해라.
  const current = parseInt(result.innerText, 10);
  result.innerHTML = current - 1;
});
plus.addEventListener("click", () => {
  //current라는 공간에 10진수 기준의 숫자형의 값을 가져와서 저장해라.
  const current = parseInt(result.innerText, 10);
  result.innerHTML = current + 1;
});
