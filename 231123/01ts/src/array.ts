// ts및 js코드 작성할 때 2가지 방식으로 개발 가능
// 1. 명령형방식 :: 기존에 사용중인 내장함수를 활용해서 코드를 개발
// 2. 선언형 방식(프로그래밍 코드가 작동하는데 있어서 각각의 과정에 일치하는 별도의 함수를 구현하는 방법)
// ts : js의 super set 언어
// ts가 개발됨으로 인해서, js를 활용해서 만들 수 있는 코드의 영역(*변경)이 굉장히 넓어졌다.
// java c언어를 활용해야만 작성할 수 있었던 프로그래밍 코드를

//순수함수 : side effect 부작용이 없는 함수
// 함수의 실행문 안에 입력 혹은 출력 관련된 코드가 없어야한다!
//

//불순함수
//array가 매개변수로 들어왔는데
// const array = [1, 2, 3, 4, 5]
// const test01 = (array: readonly number[]) => {
//   array.push(1);
//   array.splice(0, 1)
// }

//js 타입 종류 : string, number, boolean, null, undefined, array, object, function, symbol
// js에서 타입은 크게 2가지로 분류!!
// 1. 원시타입 : number, string, boolean, null, undefined, symbol
//2. 객체타입 : array, object, function
// 객체타입의 경우는 상황에 따라서 값을 변경시킬 수 있다.

//js에서 원시타입, 객체타입에 따라서 해당 값을 복사하는 방식도 차이가 생긴다.

let original = 1;
let copied = original;
copied += 2;
console.log(original, copied);

//d원시타입 : 읽기전용 속성값!
// 원시타입의 속성값을 외부로 복사를 하더라도 원본값이 바뀌지 않는 현태를 깊은복사.
//객체타입 : 상황에 따ㅏ서 읽기전용 속성값이 되지 않는다!
// 객체타입을 복사 : 얕은복사
const originalArray = [5, 3, 9, 7];
const shallowArray = originalArray;
shallowArray[0] = 0;
console.log(originalArray, shallowArray);

//가급적이면 얕은복사를 하지 않는 것이 좋다.

//객체타입의 얕은 복사를 깊은 복사 형태로 바꾸는 방법

const oArray = [1, 2, 3, 4];
const deepCopiedArray = [...oArray];
deepCopiedArray[0] = 0;
console.log(oArray, deepCopiedArray);

//const라는 키워드를 사용할 때, 원시타입이 아닌 객체타입의 경우에는 안에 담긴 값이 변경
// 재할당이 아니라서 const를 사용해도 먹히는 것, 재할당을 허용하겠다는 것이 아니라 기본적인 객체타입의 속성을 유지하는 것 뿐이다.
// 가급적이면, 얕은 복사는 하지 않는것이 좋다.
// const로 정의한 값에는 특정한 사유가 없다면, 값을 변경시켜주지 않는 것이 좋습니다.
//애초에 바뀔 것 같으면 let을 써라.

