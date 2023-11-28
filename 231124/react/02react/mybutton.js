function MyButton(props) {
  //구조분해
  //리액트에서 usestate라는 함수는 상태변화함수라고 불린다.
  // 상태변화란 웹브라우저 안에 있는 문서에 무언가 변화가 발생하는 것
  // 기본적으로 usestate는 무조건 2개의 변수를 구조분해할당하게 되어있다.
  // 첫번째 변수에는 기본값(usestate의 인자값으로 들어오는 값 : false)이 들어간다.
  // 두번째 변수는 첫번째 변수에 값을 변경시켜줄 수 있는 **함수**가 들어온다.
  const [isClicked, setIsClicked] = React.useState(false);
  return React.createElement(
    "button",
    { onClick: () => setIsClicked(true) },
    isClicked ? "Clicked!" : "Click Here!"
  );
}

const domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(MyButton), domContainer);
