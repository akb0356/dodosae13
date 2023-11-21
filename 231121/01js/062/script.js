const userDataList = [
  { id: 1, name: "곰", age: 18 },
  { id: 2, name: "여우", age: 27 },
  { id: 3, name: "사자", age: 32 },
  { id: 4, name: "얼룩말", age: 41 },
  { id: 5, name: "기린", age: 56 },
];

const button = document.querySelectorAll(".button");

const userList = document.querySelector(".user_list");

const updateList = (filterList) => {
  let listHtml = "";
  for (let data of filterList) {
    listHtml += `
    <li>${data.name} : ${data.age}세</li>
    `;
  }
  userList.innerHTML = listHtml;
};

const onClickButton = (e) => {
  const button = e.target;
  const targetAge = button.dataset.age;
  //filter는 100% 표현식문이기에 {} 빼기
  const filterList = userDataList.filter((data) => data.age >= targetAge);
  updateList(filterList);
};

button.forEach((element) => {
  element.addEventListener("click", (e) => {
    onClickButton(e);
  });
});
