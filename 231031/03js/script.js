// 구조분해할당
// 자바스크립트 고급스킬 => 모듈
// 레고 블록쌓기

const fruits = ["사과", "복숭아"];
console.log(fruits);

// let apple = fruits[0];
// let peach = fruits[1];

let [apple, peach] = ["사과", "복숭아"];
console.log(apple);
console.log(peach);

// 여름과 겨울은 변수명을 선언하지 않아 가져올 수 없다.
let [spring, , fall] = ["봄", "여름", "가을", "겨울"];
console.log(spring);
console.log(fall);

// 구조분해할당을 하고자하는 첫번째가 kim이었고 앞에 변수를 선언하지 않아서 나머지가 할당 안된 것. 근데 난 뒤에 이박최도 가져오고싶은데? 싶으면 앞에 ...을 넣어라. 그럼 배열형식으로 가져온다.
// let [teacher] = ["kim", "lee", "park", "choi"];
// console.log(teacher);
let [teacher, ...students] = ["kim", "lee", "park", "choi"];
console.log(teacher);
console.log(students);

let x = 10;
let y = 20;
// 구조분해할당을 함으로 x가 20이 되고 y가 10이 되었다.
console.log(([x, y] = [y, x]));

