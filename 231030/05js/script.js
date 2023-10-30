// 1. 배열 리스트 만들기
// 2. 리스트 만든걸 origin에 띄우기
// 3. 배열 리스트 만든 값을 전부 더하기
// 4. 더해서 나온 값을 리스트 맨 뒤에 push하기
// 5. 그래서 result에 나타나게 하기.

const origin = document.querySelector("#origin");
const rsult = document.querySelector("#result");
console.log(origin);

let numbers = [2, 4, 6, 8, 10];

let showArray = (area, arr) => {
  let str = "<table><tr>";
  for (let i = 0; i < arr.length; i++) {
    str += `<td>${arr[i]}</td>`;
  }
  str += "</tr></table>";
  area.innerHTML = str;
};

showArray(origin, numbers);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  // 배열의 모든 합
  sum += numbers[i];
}
numbers.push(sum);
showArray(result, numbers);
