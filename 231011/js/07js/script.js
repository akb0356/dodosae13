// for문
// const students = ["park", "lee", "kim", "kang"];

// for (let i = 0; i < students.length; i++) {
//   document.write(`${students[i]}, <br />`);
// }

// 위와 동일
// document.write(students[0]);
// document.write(students[1]);
// document.write(students[2]);
// document.write(students[3]);

// let colors = ["red", "blue", "green", "white", "black"];

// for (let i = 0; i < colors.length; i++) {
//   document.write(`${colors[i]} <br /><br />`);
// }

// for each문
// const students = ["park", "lee", "kim", "kang"];

// // class형 함수
// // students.forEach(function (student) {
// //   document.write(`${student} <br />`);
// // });

// students.forEach((student) => {
//   document.write(`${student} <br />`);
// });

// forin문
// const gitBook = {
//   title: "깃 & 깃허브 입문",
//   pubDate: "2023-10-11",
//   pages: 272,
//   finished: true,
// };

// for (key in gitBook) {
//   document.write(`${key} : ${gitBook[key]} <br />`);
// }

// for of 문
// const students = ["park", "lee", "kim", "kang"];
// for (student of students) {
//   document.write(`${student} <br/>`);
// }

// while문
// let stars = parseInt(prompt("별의 개수 : "));

// if (stars !== null && stars !== "") {
// 조건값이 주어져야함.
//   while (stars > 0) {
//     document.write("*");
//     stars--;
//   }
// }

// do while문
if (stars !== null && stars !== "") {
    do {
      document.write("*");
      stars--;
    } while (stars > 0);
    }
