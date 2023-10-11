// 1번
let id = "ezen";
let pw = "1234";

// 2번
let user_id = prompt("당신의 아이디는?");
if (id === user_id) {
  let user_pw = prompt("당신의 패스워드는?");
  if (pw === user_pw) {
    alert(`${user_id}님 반갑습니다.`);
  } else {
    alert(`${user_id}님 비밀번호가 일치하지 않습니다.`);
  }
} else {
  alert("아이디가 일치하지 않습니다.");
  location.reload();
}
