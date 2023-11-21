// container를 끌고온다.
// container 안에 클래스값 card가 붙은 div를 자식요소로 추가한다.
// div 안에 또 h2태그와 함께 p태그를 추가한다.
// h2랑 p태그 안에 inntertext로 이름과 지역을 넣는다.

userList = [
  { id: 1, name: "곰", address: "서울" },
  { id: 2, name: "여우", address: "경주" },
  { id: 3, name: "다람쥐", address: "부산" },
];
const container = document.querySelector(".container");
userList.forEach((userData) => {
  container.innerHTML += `
  <div class="card">
  <h2>${userData.name}</h2>
  <p>지역 : ${userData.address}</p>
  </div>`;
});
