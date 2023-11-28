//response의 결과값이 나올 때 fullfilled , 그 외의 rejected
// js에 비동기처리방식의 3부작
// fetch() => 해당함수를 활용해서 내.외부의 값을 가져와서 함수를 실행하면 무조건 반환되는 값이 promise객체이다.
//promise 객체 => fulfilled / rejected
//fulfilled => then()
//rejected => catch()

fetch("student-2.json")
  .then((response) => response.json())
  .then((json) => {
    let output = "";
    json.forEach((student) => {
      output += `
      <h2>${student.name}</h2>
      <ul>
      <li>이름 : ${student.name}</li>
      <li>전공 : ${student.major}</li>
      <li>학년 : ${student.grade}</li>
      </ul>
      <hr>
      `;
    });
    document.querySelector("#result").innerHTML = output;
  })
  .catch((err) => console.log(err));
