// js에서 오름차순과 내림차순을 어떻게 정리하는가
// = sort()
//sort는 정렬하고자하는 아이템의 첫번째 요소를 기준으로 정렬한다. 정렬기준 : 숫자가 아닌 아스키문자 기준
// const number01 = [10, 3, 8, 4, 1];
// const compare02 = (a, b) => {
//   return a - b;
// };

// number01.sort(compare02);
// number01.sort(function (a, b) {
//   return a - b;
// });
// console.log(number01);

const userData = [
  { id: 2, name: "곰" },
  { id: 10, name: "여우" },
  { id: 4, name: "사자" },
  { id: 29, name: "기린" },
  { id: 101, name: "호랑이" },
];

const ascending = document.querySelector(".ascending");
const descending = document.querySelector(".descending");
const userList = document.querySelector(".user_list");

const updateList = () => {
  let listHtml = "";
  for (let data of userData) {
    listHtml += `
    <li>${data.id}:${data.name}</li>
    `;
  }
  userList.innerHTML = listHtml;
};
const sortByascending = () => {
  userData.sort((a, b) => {
    return a.id - b.id;
  });
  updateList();
};

const sortBydescending = () => {
  userData.sort((a, b) => {
    return b.id - a.id;
  });
  updateList();
};

ascending.addEventListener("click", (e) => {
  sortByascending();
});
descending.addEventListener("click", (e) => {
  sortBydescending();
});
