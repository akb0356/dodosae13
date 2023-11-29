//객체 혹은 배열에서 특정 인덱스 값을 가지고 있는 속성만 추려서 객체를 만들고자 할 때.

// const obj = {
//   name: "jane",
//   age: 22,
//   city: "seoul",
//   country: "korea",
// };

// //만들어진 객체에서 name과 age만 뽑아 쓰고 싶어.
// pick(obj, ['name', 'age'])

// export const pick = (obj, key) =>
//   key
//     .map((key) => ({ [key]: obj[key] }))
//     .reduce((result, value) => ({ ...result, ...value }));

// keyof라는 연산자는 특정 객체 안에 포함된 키를 인자값으로 받아서 반복문 형태로 구문을 작성하조가 할 때, 해당 객체와 키의 상관관계를 규명하기위한 타입 연산자이다.
export const pick = <T, K extends keyof T>(obj:T, key:K[]) =>
  key
    .map((key) => ({ [key]: obj[key] }))
    .reduce((result, value) => ({ ...result, ...value }));
