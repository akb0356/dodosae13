// 1. input 태그에 입력된 값을 가져오기.
// 2. 버튼을 클릭하면 이벤트가 실행되기
// 3. 그 이벤트는 @기준으로 앞에서 3개는 ***로 바꾸는 것.
// 4. 그 결과값을 정의하여 result 안에 표시되게끔 한다.

const email = document.querySelector("#email");
const button = document.querySelector("#btn");
const result = document.querySelector("#result");

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (email.value !== "") {
    let userName = email.value.split("@")[0];
    let half = userName.length / 2;
    userName = userName.substring(0, userName.length - half);
    let domain = email.value.split("@")[1];
    result.innerText = `${userName}***@${domain}`;
  }
});
