// let usernumber = document.querySelector("#user-number");
// let btn = document.querySelector("#btn");
// let result = document.querySelector("#result");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let un = usernumber.value;
//   if (un < 10) {
//     result.innerText = un;
//   } else if (un > 10) {
//     alert("10보다 작은 수를 입력하세요");
//   } else (un === "") {
//     alert("숫자를 입력해주세요.");
//   }
// });

const button = document.querySelector("form > input");
const usernumber = document.querySelector("#user-number");

//usernumber 값을 가져오면서 왜 value를 뒤에 붙여도 안끌고와지는 이유 :: 폼태그에서 서버에 값을 전달해야 가져올 수 있기 때문에 처음부터 value 값을 가져오라고 넣어도 찾아올 수 없다.

button.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("click");
  let n = usernumber.value;
  try {
    // 실행문
    if (n === "" || isNaN(n)) {
      // 예외 사항이 생겼을 때 throw
      throw `숫자를 입력하세요.`;
    }
    n = Number(n);
    if (n <= 10) {
      document.querySelector("#result").innerText = n;
    }
    if (n > 10) {
      throw `10보다 작은 수를 입력하세요!`;
    }
  } catch (err) {
    // 위의 throw값에 있는 문구가 에러로 들어온다?
    alert(err);
  } finally {
    usernumber.value = "";
  }
});
