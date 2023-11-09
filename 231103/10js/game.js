// 1. button 클릭했을 때 랜덤값으로 1부터 45까지의 숫자 중 6개의 중복되지 않는 숫자가 노드 출력창에 띄워야한다.
// 2. button 태그 요소를 dom에서 가져와 정의
// 3. button 태그 요소 이벤트 적용
// 4. gamelottonumber 클래스 값 가지고 있는 노드 정의
// 5. js의 내장객체 (*수학) 활용해서 랜덤값을 생성.
// 6. 랜덤값을 총 6회에 걸쳐서 반복 생성.(반복문 활용)
// 7. 랜덤값을 생성한 이후에 해당 값을 담아놓을 배열도 필요
// 8. 랜덤 값이 들어갈 배열은 반드시 값이 중복되어선 안된다.

const button = document.querySelector(".wrapper_lotto_btn");
const result = document.querySelector(".lotto_game_number");
const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  //구조분해할당
  let { digitCount, maxNumber } = luckyNumber;
  let myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = `재추첨하겠습니다.`;
  }
});

// 끝말잇기
// 문자열의 메서드 : 배열처럼 인덱스 값을 가지고 있다. 문자열의 맨 마지막 인덱스 값을 찾아서 그 단어로 시작하는지 아닌지 찾음. 동일하면 정답, 동일하지 않으면 땡!
const search = document.querySelector(".search");
search.addEventListener("click", (e) => {
  e.preventDefault();
  let word = document.querySelector("#word").innerText;
  let myword = document.querySelector("#myword").value;
  let lastword = word[word.length - 1];
  let firstWord = myword[0];
  if (lastword === firstWord) {
    document.querySelector("#result").innerText = `정답입니다.`;
    document.querySelector("#word").innerText = myword;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = `틀렸습니다.`;
    document.querySelector("#myword").value = "";
  }
});
