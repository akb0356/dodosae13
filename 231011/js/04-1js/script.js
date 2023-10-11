// let result = confirm("정말로 회원을 탈퇴하시겠습니까?")
// if(result) {
//   document.write("정상적으로 탈퇴처리 되었습니다.")
//   else {
//     document.write("탈퇴 취소 처리 되었습니다.")
//   }
// }

let month = parseInt(prompt("현재는 몇월입니까?", "10"));
if(month >= 9 && month <= 11) {
  document.write("독서의 계절 가을이네요");
} else if (month >= 6 && month <= 8){
  document.write("여행가기 좋은 여름이네요");
} else if (month >= 3 && month <= 5) {
  document.write("햇살 가득한 봄이네요");
} else {
  document.write("스키의 계절 겨울이네요");
}