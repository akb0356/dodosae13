const btn = document.querySelector("button");
// html 문서가 곧 body기 때문에 body는 별도로 정의하지 않아도 끌고 올 수 있다.
btn.onclick = () => {
  document.body.classList.toggle("dark");
  if (btn.innerText == "다크모드") {
    btn.innerText = "라이트모드";
  } else if ((btn.innerText = "라이트모드")) {
    btn.innerText = "다크모드";
  }
};

// toggleBox.onclick = () => {
//   toggleBox.innerHTML = "라이트모드변경하기";
//   contents.classList.toggle("clicked");
// };

// 우측 상단 버튼을 클릭했을 때 배경색과 글자 색상을 변경한다.
// 1. 우측 상단 버튼의 '정의'가 필요(* 노드 가져와야겠다.)
// 2. 버튼을 클릭했을 때 이벤트 정의(*계획, 실행)가 필요하겠다.
// 3. 이벤트(*배경색상, 글자색상) 자체에 대한 정의 필요.
// (*가상클래스를 활용해서 미리 스타일을 적용시켜놔야겠다.)
// 4. 이벤트가 실행되면 버튼의 텍스트 요소 변경이 필요하다.
