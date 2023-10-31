// 배열의 변칙성 메서드!
// 배열의 메서드 slice, splice 등은 규칙성을 가지고 있는 규칙성 메서드
// 배열 자체의 속성을 변경시킴.

// map(), filter(), reduce()
// 2015년 이후에 ES6 문법으로 나왔습니다.

let numbers = [1, 2, 3, 4, 5];

// Q. numbers 배열 안에 있는 모든 아이템에 곱하기 2를 해서 신규 배열을 만들어보세요
//map은 콜백함수를 가져온다(함수안의 함수를 끌고온다.)
//numbers 안에 있는 각각의 아이템을 number로 정의
//원본 데이터를 가공하고자 할 때 원본을 해치지 않는 선에서 새로운 결과를 뽑을 수 있기 때문에 map을 많이 쓴다.

//매개변수 1개인 경우
let newNumbers = numbers.map((number) => number * 2);
console.log(newNumbers);
console.log(numbers);

//매개변수 2개인 경우
// number 값과 각각의 index 찾아와라
// 단문은 {}를 안넣기도...
let newNumbers2 = numbers.map((number, index) => index + number * 3);
console.log(newNumbers2);
