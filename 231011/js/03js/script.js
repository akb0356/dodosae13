let bus = prompt("오늘 사용한 교통비를 입력해주세요.");
let food = prompt("오늘 먹은 식비를 입력해주세요.");
let drink = prompt("오늘 먹은 음료 값을 입력해주세요.");
let plus = bus + food + drink;
let result = plus >= 10000 && plus <= 10000;
result = result ? `(${plus} - 10000) 돈관리 주의` : "돈 관리 잘 하셨어요!";

document.write(`${result}`);
