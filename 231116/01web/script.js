// option 값을 끌고 오고 싶을 때 뒤에 .options를 붙이면 option요소들을 배열형태로 끌고온다.
// const major = document.querySelector("#major").options;
const major = document.querySelector("#major");
const displaySelect = () => {
  // 선택한 index값의 텍스트를 가져와서 selectedText 안에 저장한것.
  let selectedText = major.options[major.selectedIndex].innerText;
  //그래서 ${selectedText}를 선택하면 선택한 옵션의 텍스트값이 가져와진다.
  alert(`${selectedText}를 선택했습니다.`);
};

major.addEventListener("change", displaySelect)
