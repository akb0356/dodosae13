// title 아이디를 가지고 있는 해당 속성값, 텍스트 요소. 태그 내용까지 싹 잡은 :: 노드라고 부른다 :: 노드를 챙겨온다.
const title = document.querySelector("#title");
const userName = document.querySelector("#desc .userName");
console.log(userName);
const pfImg = document.querySelector("#profile img");
// title.onclick = () => {
//   // title.innerText = "프로필"
//   title.innerHTML = "프로필";
// };
// 위와 동일 내용

title.onclick = () => {
  title.innerHTML = "프로필";
  // title.style.background = "#000";
  // title.style.color = "#fff";
  // title.classList.add("clicked")
  // 만약 클래스를 추가하는게 아니라 버리고 싶다면
  // title.classList.remove("clicked")
  // 더하기도 하고 빼기도 하고 싶으면 조건식을 써야한다.
  // 만약 title에 해당 클래스를 찾아봐. 그런데 clicked라는 클래스가 포함되어있는 컨텐츠가 없다면(앞에 | 를 붙여서 없다면~ 으로 만듦).
  // if (!title.classList.contains(".clicked")) {
  //   title.classList.add("clicked");
  // } 
  //   // 근데 있다면 else문으로
  // else {
  //   title.classList.remove("clicked");
// }
// 토글은 있으면 추가하고 없으면 제거하라는 의미.
title.classList.toggle("clicked");
};
// ..온점표기법 :: 객체 안에 있는 key를 가져올 때. :: 그 말은 html 안에 있는 img 노드 안에 src가 키값이 되고 그 내부 링크 경로가 value값이 되는것.
// innerText 를 쓰면 <b> 태그도 텍스트 요소 자체로 나온다. 단 innerHTML로 끌고오면 볼드처리 태그로 처리되어 나온다.
// css는 일방적인 스타일 출력밖에 안되지만 js는 사용자가 직접 참여하는 인터렉티브한 스타일을 만들 수 있다.
userName.onclick = () => {
  userName.innerHTML = "이름 : <b>영심이</b>";
  userName.style.color = "#f00";
};
pfImg.onclick = () => (pfImg.src = "../img/2/pf2.png");

// document에서 특정 클래스의 값을 가지고 있는 노드를 찾게되었을 때에만(어떠한 조건에 부합할 때) 이벤트를 적용하고 싶다면 컴퓨터에게 그 조건을 전달해야한다. 조건을 전달하려면...
// .classList는 원하는 요소의 클래스 리스트를 배열 형태로 가져온다.
