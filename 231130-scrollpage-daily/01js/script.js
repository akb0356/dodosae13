//사전에 정의해야할 내용부터 정리해보도록 하겠습니다!
// 조건 : 마우스휠이 스크롤이 되면,
//1. 효과 : 상단부가 사라짐
//2. 효과 : 하단부가 밑에서부터 올라옴
//3. 효과 : 중간부분에서 프로그래스바가 나타남

// 우리의 컴퓨터의 스크롤이동에대한 값을 도출! => window.scrollY => 값을 도출!
// 위 값이 도출된다면, 위에 정리한 1~3번까지의 이벤트가 발생되어야한다. => addeventlistener

// 상단부가 없어지려면 상단부가 무엇인지를 컴퓨터에게 알려줘야함.
// 상단부 : 헤더, 메인 및 서브타이틀, 프로그래스바, 컨텐츠랩

//위의 효과인 상단부가 없어지게 됨과 동시에 하단부가 위로 올라옴
// 하단부 : 컨텐츠 랩

//어차피 컴퓨터에게 알려줘야하는 정의!

const header = document.querySelector("header");
const progressBar = document.querySelector(".bar");
const coverWrap = document.querySelector(".coverWrap");
const dimd = document.querySelector(".dimd");
const contentWrap = document.querySelector(".contentWrap");
const coverTitle = document.querySelector(".coverTitle");

//내가 내리고있는 마우스 휠에 따른 스크롤의 위치
//그 스크롤의 위치가 전체 문서에서 얼만큼의 위치를 차지하고 있는지
// => 전체 문서대비 %(비율)

let scrollNum = 0;
let documentHeight = 0;
let per = 0;
//현재 내 눈으로 볼 수 있는 화면 영역의 높이(*스크롤을 하지 않아도 되는 영역)
const coverHeight = window.innerHeight;
coverWrap.style.height = coverHeight + "px";
contentWrap.style.marginTop = coverHeight + "px";

//현재의 스크롤 위치에 대한 %를 구하는 공식을 담고 있는 함수
const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0);
};

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight;
  per = percent(scrollNum, documentHeight);
  progressBar.style.width = per + "%";
  //현재 눈으로 보이는 높이값만큼 스크롤이 내려오게되면 헤더에 fixed를 주삼
  if (scrollNum >= coverHeight) {
    header.classList.add("fixed");
  } else {
    //그렇지 않다면 클래스 지우고 스타일 변경해.
    header.classList.remove("fixed");
    coverTitle.style.top = `${-scrollNum / 5}px`;
    coverWrap.backgroundPosition = `center ${-scrollNum / 15}`;
    dimd.style.backgroundColor = `rgba(0, 0, 0, ${0.4 + scrollNum / 1000})`;
  }
});
