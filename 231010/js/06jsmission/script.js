// let nowYear = today.getFullYear

// let age = prompt("당신이 태어난 해를 알려주세요.", "0")

// document.write(``)

let today = new Date();
console.log(today);
let currentYear = today.getFullYear();
console.log(currentYear);
let birthYear = prompt("태어난 연도를 입력하세요.", "0");
let age = currentYear - birthYear + 1;

document.write(`당신은 ${age} 세 입니다.`);
