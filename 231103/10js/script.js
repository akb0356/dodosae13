// 공통페이지 : index,,
// 라우팅(*분기) 페이지 : home.html , game.html , jukebox.html
// 라우팅(*분기) 페이지 : home.css , game.css , jukebox.css
// 라우팅(*분기) 페이지 : home.js , game.js , jukebox.js
// 리액트 => 각각의 html 페이지, 모든 html의 역할을 하는 페이지들을 js로 만들 수 있다. => 각 모듈화 시켜서 메인 js에 끼워넣기가 가능.

// 각 탭을 클릭하면 해당 탭에 연관성이 있는 페이지가 나와야한다.
// 페이지가 나옴과 동시에 오른쪽 탭의 스타일이 변경되어야한다.
// 선택된 탭의 경우, 배경컬러가 흰색으로 변경되며 폰트 컬러도 검정이 된다.
const menuHome = () => {
  document.querySelector("#contentFrame").setAttribute("src", "./home.html");
  document.querySelector("#menuHome").style = "color: #000; background: #fff";
  document.querySelector("#menuGame").style =
    "color: #fff; background: #298eb5";
  document.querySelector("#menuJukebox").style =
    "color: #fff; background: #298eb5";
};
const menuGame = () => {
  document.querySelector("#contentFrame").setAttribute("src", "./game.html");
  document.querySelector("#menuGame").style = "color: #000; background: #fff";
  document.querySelector("#menuHome").style =
    "color: #fff; background: #298eb5";
  document.querySelector("#menuJukebox").style =
    "color: #fff; background: #298eb5";
};
const menuJukebox = () => {
  document.querySelector("#contentFrame").setAttribute("src", "./jukebox.html");
  document.querySelector("#menuJukebox").style =
    "color: #000; background: #fff";
  document.querySelector("#menuHome").style =
    "color: #fff; background: #298eb5";
  document.querySelector("#menuGame").style =
    "color: #fff; background: #298eb5";
};
