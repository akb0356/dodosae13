let xhr = new XMLHttpRequest();

//open을 통해 어떤 데이터를 가져올지 요청
//http 요청 메서드로 get을 요청.
// 데이터를 가져올 url로 제이슨 파일 지정.
// 비동기적으로 요청을 처리할지, 여부를 결정 여기서 true는 비동기요청을 의미한다.
// 여기서 동기요청은 요청을 보내면 응답이 올때까지 실행이 블록된다, 즉 요청과 응답처리가 순차적으로 진행되어야하는 것이다.
// 비동기 요청은 요청을 보내고 나중에 응답을 기다리지 않고 실행을 계속 할 수 있다.
xhr.open("get", "student-2.json", true);
//send를 반드시 해야 내 요청사항을 보낼 수 있다.
xhr.send();

// 제이슨 파일에서 for문으로 돌리려면 배열 형태로 써야하기에 []안에 넣는다.

let renderHTML = (contents) => {
  // 제이슨 데이터를 html로 변환하여 output에 저장.
  let output = "";
  for (let content of contents) {
    output = `
    <h2>${content.name}</h2>
    <ul>
    <li>히트곡 : ${content.music}</li>
    <li>skdl : ${content.year}</li>
    </ul>
    `;
  }

  document.querySelector("#result").innerHTML = output;
};

// onreadystatechange는 httprequest 객체에서 비동기요청의 상태를 모니터링하고 처리하기위해 사용되는 핸들러. 이 핸들러는 요청상태가 변경될 때마다 호출되는데
// readyState로 현재 요청 상태를 확인이 가능한데.

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let students = JSON.parse(xhr.responseText);
    renderHTML(students);
  }
};
