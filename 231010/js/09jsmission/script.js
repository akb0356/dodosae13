// let tem01 = prompt("섭씨 온도를 입력해주세요.")
// let tem02 = (tem01 - 32) / 1.8

let fah = parseFloat(prompt("변환할 화씨온도를 입력해주세요."));
let sel = ((fah - 32) / 1.8).toFixed(1);
alert(`화씨 ${fah}도는 섭씨 ${sel}도 입니다.`);
