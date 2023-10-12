// queryselector :: 단일개체 , queryselectorAll :: 안에 복수로 개체가 들어있을 때 반드시 all
const buttons = document.querySelectorAll("button");
const computerChoice = document.querySelector(".computer-choice");
const userChoice = document.querySelector(".you-choice");
const winner = document.querySelector(".result");
const result = ["가위", "바위", "보"];

const show = function (user, computer, result) {
  userChoice.innerHTML = user;
  computerChoice.innerHTML = computer;
  winner.innerHTML = result;
};

// 승부 판정을 내주는 공식.
const game = function (user, computer) {
  if (user === computer) {
    let message = "무승부";
  } else {
    switch (user + computer) {
      case "가위보":
      case "바위가위":
      case "보바위":
        message = "사용자 승리";
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        message = "컴퓨터 승리";
        break;
    }
  }
  // 콜백 함수 :: user값 받고 computer값 받고 message값을 띄우며 show 실행해줘.
  show(user, computer, message);
};

const play = function (event) {
  // .target은 우리가 선택한걸 추적해준다. 해당 선택요소의 .innertext 동일 텍스트 요소를 찾아서 user라는 공간에 넣어달라 요청하는거.
  const user = event.target.innerText;
  // 0.1.2중 하나가 들어가고
  const randomIndex = Math.floor(Math.random() * 3);
  // 새로고침할 때마다 result 배열 안에 담긴 값을 끌어오는 공식.
  const computer = result[randomIndex];
  // 콜백함수. game이라는 함수도 실행시키고 끝내라.
  game(user, computer);
};

// foreach 배열 안에 있는 내용을 한놈씩 가져와서 function값을 실행할 수 있도록 반복.(click이 되면 play를 실행해라.)
buttons.forEach(function (button) {
  button.addEventListener("click", play);
});
