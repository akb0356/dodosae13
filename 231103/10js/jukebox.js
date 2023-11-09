const songs = document.querySelectorAll(".albumTable_song");

// 플레이 버튼을 누르면 음악이 재생된다.
// 정지 버튼을 누르면 재생되던 음악이 멈춘다.
// 재생, 일시정지버튼 가져오기.
// 음원이 1개만 있는 것이 아니라 사용자는 어떤 음원을 선택할지 알 수 없다.
// 반복문이 필요함.

for (let el of songs) {
  let play = el.querySelector(".fa-caret-right");
  let pause = el.querySelector(".fa-pause");
  play.addEventListener("click", (e) => {
    e.currentTarget.closest("td").querySelector("audio").play();
  });
  pause.addEventListener("click", (e) => {
    e.currentTarget.closest("td").querySelector("audio").pause();
  });
}
