// // 배열객체 => 내장메서드

// let arr_1 = ["사당", "교대", "방배", "강남"];
// let arr_2 = ["신사", "압구정", "옥수"];

// document.write(arr_1, "<br/>");
// document.write(arr_2);

// 배열 사이에 들어가 연결해주는 문자열이 된다.
// let result = arr_1.join("-");
// document.write(result, "<br />");

// 첫번째 배열(arr_2) 뒤에 concat 안에 넣을 값을 붙인다.
// result = arr_2.concat(arr_1);
// document.write(result, "<br/>");

// // 첫번째 변수부터 두번째 직전까지 뽑아서 띄우겠다.
// result = arr_1.slice(1, 3);
// document.write(result, "<br/>");

// // 오름차순(가나다라) 정렬을 하겠다.
// result = arr_1.sort();
// document.write(arr_1, "<br/>");

// // 역순서로 변경한다.
// result = arr_2.reverse();
// document.write(arr_2, "<br/>");

let greenArr = ["교대", "방배", "강남"];
let yellowArr = ["미금", "정자", "수서"];

document.write(greenArr, "<br />");
document.write(yellowArr, "<br />");

// 2번 해당 배열값을 1개의 아이템을 선택해 '서초'와 '역삼'으로 대체하라는 의미
greenArr.splice(2, 1, "서초", "역삼");
document.write(greenArr, "<br />");

// 배열의 가장 마지막에 있는 애만(ex.수서) 잘라다 띄운다.
let data1 = yellowArr.pop();
document.write(data1, "<br />");

// 배열의 가장 앞에 있는 애를(ex.수서) 잘라다 띄운다.
let data2 = yellowArr.shift();
document.write(data2, "<br />");


// 이해안가 여기부터
// 맨 뒤에 아이템을 넣는다.
yellowArr.push(data2);
document.write(yellowArr, "<br />");

// 배열의 가장 앞에 있는 애를(ex.수서) 잘라다 띄운다.
yellowArr.unshift(data1);
document.write(yellowArr, "<br />");
