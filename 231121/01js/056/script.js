const userDataList = [
  { id: 123, name: "아이유" },
  { id: 456, name: "태연" },
  { id: 789, name: "조인성" },
];

// input 태그를 끌고온다.
// input 태그 안에 입력된 값 찾아오기 정의
// 일치하는 데이터를 끌어오면 result 안에 텍스트 대치하여 결과값 출력
// 없으면 유저검색결과 없음 출력

const searchIdInput = document.querySelector("#search-id-input");
const searchResult = document.querySelector("#search-result");

const findUser = (searchId) => {
  const targetData = userDataList.find((data) => data.id === searchId);
  if (targetData === null) {
    searchResult.innerText = "유저검색결과없음";
    return;
  }
  searchResult.innerText = targetData.name;
};
searchIdInput.addEventListener("keyup", (e) => {
  const searchId = Number(e.target.value);
  findUser(searchId);
});
