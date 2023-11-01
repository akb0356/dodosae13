// 배열 메서드
// 변칙성 메서드 : map() / filter() / reduce()
// reduce() :: 누산기!! 누적된 값을 계산할 수 있는 메서드.

let numbers = [1, 2, 3, 4, 5];
// numbers의 값을 가져온다. total이라는 누산기 자체를 의미하는 total과 누산기에 더할 현재 값인 current를 정의한다.
// result라는 변수에 reduce 메서드를 사용하여 누산하고자하는 numbers를 객체로 받아서 콜백 함수를 실행하는데 매개변수로 누산기 자체인 total에 numbers 안에 각각의 더할 숫자를 current에 담아서 total + current 실행시켜라 수식을 만들고 초기값을 0으로 정의한다.
// 0+1+2+3+4+5
let result = numbers.reduce((total, current) => total + current, 0);
console.log(result);
