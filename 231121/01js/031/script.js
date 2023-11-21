// 상단 input 태그 대한 정의 우선
//버튼태그에 대한 정의
// 버튼태그에 저장된 속성값을 알아야한다.
// 상단 input 태그 안에 입력된 값을 찾아야한다.(*keyup이라는 이벤트를 사용하면 어떤 키가 입력되었는지 알 수 있어서 찾을 수 있다.)
// input 태그에 입력된 값과 매칭되는 값을 버튼 태그의 속성값을 통해 찾는다.

const searchWordText = document.querySelector("#search-word-input");
const prefectureList = document.querySelectorAll("#prefecture-list button");

searchWordText.addEventListener("keyup", (e) => {
  const searchWord = searchWordText.value;
  prefectureList.forEach((element) => {
    if (!searchWord || searchWord === "") {
      element.classList.remove("hide");
      return;
    }

    const prefectureName = element.dataset.name;
    const phonetic = element.dataset.phonetic;
    if (
      searchWord.charAt(0) === prefectureName.charAt(0) ||
      searchWord.charAt(0) === phonetic.charAt(0)
    ) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  });
});
