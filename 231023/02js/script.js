const selectMenu = document.querySelector("#major");

let displaySelect = () => {
  // selectmenu의 options는 배열이니깐 []형태로 찾아와 selectmenu의 index 안에 들어있는 innertext를 찾아와서 selectedtext 안에 넣어줘.
  let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
  alert(`[${selectedText}]를 선택했습니다.`);
};
// selectmenu가 변경요소가 생기면 displayselect를 실행시켜줘.
selectMenu.onchange = displaySelect;
