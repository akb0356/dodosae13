const canvas = document.querySelector("canvas");

// canvas API를 이용하여 => 2d 그래픽 요소를 그리고자 할 때는, getContext() 필수다.

//getcontext에 쓸건 2d뿐이니 걍 외워!
const ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(200, 0, 0)";
ctx.fillRect(10, 10, 50, 100);

// 자바스크립트에서는
// 1 시간개념 : 밀리조 / 초
// 2 좌표계 : 웹좌표계 / 데카르트좌표계
// 3 각도 : 호도법(*라디언) / 육십분법(*도)
// 원주율 3.14파이(* 원크기와 상관없이 무조건 원의 지름과 원의 둘레는 반드시 3.14배로 이동한다)
// r = 반지름 파이
// r: 2파이r = a도:360도(원의 지름)
//a도 * 2파이r = r*360도
// a도 = 180도 / 파이

//1라디언 = 파이 / 180도
//60도를 ㅏ디언으로 표기해라
//(파이/180도) *60
