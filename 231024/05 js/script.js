// 1. 이름을 입력하면 저장되는 값
// 2. 전공을 입력하면 저장되는 값
// 3. 등록하기 버튼을 누르면 저장되는 값
// 4. 위 리스트들을 입력할 위치(attendant의 tbody의 tr)를 끌어올 값
// 5. 저 끌어올 값은 tr을 추가하고 그 안에 1번 2번값을 각 tr로 추가해야함
// 6. 3번으로 받아온 값의 내용을 각 이름 전공 위치에 td를 추가하는 값

const userName = document.querySelector("#userName");
const major = document.querySelector("#major");
const btn = document.querySelector("form > #btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let tbody = document.querySelector("#attendant > tbody");
  let newTr = document.createElement("tr");
  let nameTd = document.createElement("td");
  nameTd.innerText = userName.value;
  userName.value = "";
  let majorTd = document.createElement("td");
  majorTd.innerText = major.value;
  major.value = "";

  newTr.appendChild(nameTd);
  newTr.appendChild(majorTd);
  tbody.appendChild(newTr);
});
