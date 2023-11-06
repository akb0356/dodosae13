let students = ["kim", "lee", "park"];
// 첫번째 매개변수 key
localStorage.setItem("students", JSON.stringify(students));

let localData;
// 만약 가져올 students가 없다면
if (localStorage.getItem("students") === null) {
  // 로컬데이터는 빈배열로 정의해줘
  localData = [];
} else {
  // 하지만 아니라면 로컬스토리지에서 getitem으로 students라는 데이터를 parse(객체로 변환) 해서 로컬 데이터에 넣어줘.
  localData = JSON.parse(localStorage.getItem("students"));
}
// 로컬데이터에 choi를 추가하고 싶어요.
localData.push("choi");
console.log(`추가 후 students : ${localData}`);

//변경된 students 값을 storage에 다시 넣고싶어.
localStorage.setItem("students", JSON.stringify(localData));

//로컬데이터에서 lee라는 인덱스 값을 찾아줘 :: indexOf()
const indexOfValue = localData.indexOf("lee");
localData.splice(indexOfValue, 1);
console.log(`삭제 후 students : ${localData}`);
localStorage.setItem("students", JSON.stringify(localData));

localStorage.removeItem("students");
