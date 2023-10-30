// 배열을 합치고 싶을 때
// let vegitable = ["양상주", "토마토", "피클"]
// let meat = ["불고기"]

// let meatBurger = vegitable.concat(meat, "빵")
// console.log(meatBurger);

// 전개연산자 :: 스프레드 연산자 :: 앞에 ...을 더한다.
let vegitable = ["양상주", "토마토", "피클"];
let cheese = ["모짜렐라", "슈레드"];

let cheeseBurger = ["빵", ...vegitable, ...cheese];
console.log(cheeseBurger);

// 배열 요소 정렬하는 메서드
let numbers = [6, 9, 3, 21, 18];
// 거꾸로 정렬 :: reverse
console.log(numbers.reverse());

// 배열 요소를 크기에 따라 정렬 :: 앞자리의 숫자의 순서를 보고 정렬한다. 1로 시작하기 때문에 우선을 가지고 있다 느끼기 때문에 아무리 두자리수여도 11, 15, 20~ 이렇게 정렬되는 것.
let week = ["sun", "mon", "tue"];
let values = [5, 20, 3, 11, 4, 15];

console.log(values.sort());
console.log(week.sort());

// 정말 순서대로 정렬하는 방법
// values.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   if (a === 0) return 0;
// });
// console.log(values);

// 순서대로 정렬 더 간단하게
values.sort((a, b) => {
  return a - b;
});
console.log(values);
