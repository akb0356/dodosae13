// 일반 사용자들에게 현재 에러가 발생되었다는 사실을 인지시켜줄 필요가 있음.
//때문에 예외 조항처리가 필요!

// console.log("시작");
// add();
// console.log("실행중...");
// console.log("종료");

//외부에서 데이터를 가져올 때는 필히 써야함. 어떠한 오류가 생길지 모르기 때문에 예외조항처리를 무조건!! 해야한다.
// 실행할 코드를 작성
try {
  console.log("시작");
  add();
  console.log("실행중...");
} catch (err) {
  // 에러가 발생하면 catch문구를 쓴다, 예외사항이 발생했을 경우, 실행할 코드
  console.log(`오류발생 ${err}`);
} finally {
  // try문 이후에 실행할 코드 = 예외와 상관없이 무조건 실행
  console.log("종료");
}

// 개발자가 개발자 나름의 에러메세지를 커스터마이징 하고 싶다면?
// throw 문
// 제이슨은 키값에 따옴표가 들어간다.
//finally는 생략이 가능하지만 try와 catch는 필수
// catch는 보통 err를 매개변수로 받음
let json = '{"grade": 3, "age": 25}';

try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw "사용자 이름이 없습니다.";
  }
} catch (err) {
  console.log(err);
} finally {
  console.log("일단종료!");
}
