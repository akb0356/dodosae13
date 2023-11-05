const lists = document.querySelectorAll(".menu_slide_item");
// 슬라이더 이미지 변경
let i = 0;
for (let el of lists) {
  let pic = el.querySelector(".menu_img");
  pic.style.background = `url(./deli_img/img_p_delimenu${
    i + 1
  }.jpg) no-repeat center center/cover`;
  i++;
}
const xbtn = document.querySelector(".xbtn .close");
const modal = document.querySelector(".modal");
const background = document.querySelector("section");
// 모달 이미지
const modalimg = document.querySelector(".modal_img");
// 모달 타이틀
const foodtitle = document.querySelector(".foodtxt_title");
// 모달 서브 타이틀
const foodsubtitle = document.querySelector(".foodtxt_subtitle");
// 모달 음식 설명
const fooddesc = document.querySelector(".foodtxt_desc");
// 모달 음식 알러지 정보
const allergydesc = document.querySelector(".foodtxt_allergy_desc");
// 모달 영양정보
const foodtable = document.querySelector(".foodinfo_table");


//각 이미지 클릭이벤트를 부여한다. 누르면 모달에 클래스 on을 주고 배경을 흐리게

//모달창 띄우기
lists.forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("on");
    background.style.filter = "blur(3px)";
  });
});
//xbtn에 on 클래스 빼기
xbtn.addEventListener("click", () => {
  modal.classList.remove("on");
  background.style.filter = "";
});

