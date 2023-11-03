// async & await
//fetch()
//XMLHttprequest는 대장객체를 활용하여 클라이언트가 서버에 데이터를 요청하고 가져올 수 있었다.(open과 send를 활용하여)
//fetch()함수는 promise객체를 반환한다.
//promise 객체가 사용할 수 있는 then, catch를 fetch함수도 사용이 가능하다.

//fetch(어디서 데이터를 가져올래?), 제대로 끌고 왔다면 then으로 호출할 수 있을 것이다.
// fetch("student-2.json").then(console.log);

fetch("student-2.json")
  .then((reponse) => reponse.json())
  //위에서 이미 json파일은 객체로 들어와 준비가 되어있음. 두번째 then은 앞에서 준비된 결과값을 받으려고 변수명을 정해주는것. 저 안의 json은 안에 star가 될 수도 있고 무엇이든 변경해도 상관없음.
  .then((json) => {
    console.log(json);
    let output = `
  <h1>${json.name}</h1>
  `;
    document.querySelector("#result").innerHTML = output;
  })
  .catch((err) => console.log(err));
