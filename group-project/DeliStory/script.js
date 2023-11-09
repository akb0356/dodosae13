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
// foodinfo
const foodTitle = document.querySelector(".foodtxt_title");
const foodSubtitle = document.querySelector(".foodtxt_subtitle");
const foodDesc = document.querySelector(".foodtxt_desc");
const allergy = document.querySelector(".foodtxt_allergy_desc");
const foodImage = document.querySelector(".modal_img");
const foodInfoTable = document.querySelector(".foodinfo_table");
const tableDiv = foodInfoTable.querySelectorAll("div");

//json 파일을 객체로 가져오기
const url = "menu_info.json";
fetch(url)
  .then((info) => info.json())
  .then((info) => {
    const infoData = info;

    lists.forEach((img, i) => {
      img.addEventListener("click", () => {
        modal.classList.add("on");

        const infoDataI = infoData[i];
        const nutrition = infoData[i].nutrition;

        for (let c = 0; c < tableDiv.length; c++) {
          if (c % 2 === 1) {
            tableDiv[c].innerHTML = nutrition[Math.floor(c / 2)];
          }
        }

        foodTitle.innerHTML = infoDataI.name;
        foodSubtitle.innerHTML = infoDataI.engname;
        foodDesc.innerHTML = infoDataI.description;
        allergy.innerHTML = infoDataI.allergy;

        foodImage.innerHTML = "";

        const imgElement = document.createElement("img");
        imgElement.src = infoDataI.image;
        foodImage.appendChild(imgElement);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });

//xbtn에 on 클래스 빼기
xbtn.addEventListener("click", () => {
  modal.classList.remove("on");
  background.style.filter = "";
});

/*header*/
// const trigger = document.querySelector(".trigger");
// const dropmenu = document.querySelector(".dropmenu");
// const header = document.querySelector("header");
// const imgElement = document.querySelector("#logo");

// trigger.addEventListener("click", (e) => {
//   trigger.classList.toggle("active");
//   dropmenu.classList.toggle("drop");
//   // 추가
//   if (dropmenu.classList.contains("drop")) {
//     setTimeout(() => {
//       imgElement.src = `./deli_img/logo-white.svg`;
//     }, 300);
//   } else if (header.classList.contains("sticky")) {
//     imgElement.src = `./deli_img/logo-white.svg`;
//   } else {
//     imgElement.src = `./deli_img/logo.svg`;
//   }
// });

// /*sticky*/

// window.addEventListener("scroll", () => {
//   header.classList.toggle("sticky", window.scrollY > 0);
//   //추가
//   if (header.classList.contains("sticky")) {
//     imgElement.src = `./deli_img/logo-white.svg`;
//   } else {
//     imgElement.src = `./deli_img/logo.svg`;
//   }
// });

/*header*/
const trigger = document.querySelector(".trigger");
const dropmenu = document.querySelector(".dropmenu");
const white = document.querySelector(".logo > a > .white");
const black = document.querySelector(".logo > a > .black");
trigger.addEventListener("click", (e) => {
  trigger.classList.toggle("active");
  dropmenu.classList.toggle("drop");

  if (dropmenu.classList.contains("drop")) {
    setTimeout(() => {
      white.style.display = "block";
      black.style.display = "none";
    }, 300);
  } else {
    white.style.display = "none";
    black.style.display = "block";
  }
});

/*sticky*/

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
  

  
});
