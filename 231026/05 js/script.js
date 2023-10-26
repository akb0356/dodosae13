// 1. 사용자에게 문자열을 받기 위해 알림창을 띄우고 저장.
// 2. 사용자가 찾고자 하는 문자열을 받을 알림창
// 3. 반복문을 사용해 사용자에게 받은 값이 몇번 사용되었는지 찾는다.
// 4. 사용자에게 알림창으로 결과값을 준다.

const string = prompt("문자열을 입력하세요.");
const letter = prompt("어떤 문자를 체크하시겠습니까");

let counting = (str, ch) => {
  let count = 0;
  for (let i = 0; i < str.lenght; i++) {
    if (str[i] === ch) {
      count += 1;
    }
  }
  return count;
};

const result = counting(string, letter)
console.log(`${string}에는 ${letter}가 ${result}개 있습니다.`)