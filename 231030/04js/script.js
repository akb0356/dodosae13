// splice() :: 배열 내 원하는 위치에 요소를 추가하거나 제거할 때 사용하는 메서드

// 특정 위치부터 끝까지 요소를 제거하고 싶을 때

let subject = ["html", "css", "javascript", "react", "typescript"];
console.log(subject);

subject.splice(2);
console.log(subject);

// splice() :: 메서드 안에 매개변수가 2개 일 때
let week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
console.log(week);
week.splice(1, 5);
console.log(week);

//slice() ::  배열 안에 원하는 위치에 있는 값을 추출하고, 추가하는 메서드
let color = ["red", "green", "blue", "white", "black"];
console.log(color);
// 2번째 배열부터 끝까지 다 찾아오라는 의미.
// splice는 원 배열값을 변경시키지만 slice는 **원 배열값을 변경시키지 않고** 원하는 값만 끌고온다.
console.log(color.slice(2));
console.log(color);
// 1번에서 시작해서 4번의 매개변수 바로 앞까지만 끌고온다.(4번째 배열은 포함 안함)
console.log(color.slice(1, 4))
