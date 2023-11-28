type func1 = () => string;

//함수시그니처방식으로 타입을 정의한다면?
const makeNames = (): (() => string) => {
  const names = ["jack", "jane", "smith"];
  let index = 0;
  return (): string => {
    if (index === names.length) {
      index = 0;
    }
    return names[index++];
  };
};

const arr = [1, 2, 3, 4, 5, 6];
const makeName: () => string = makeNames();
console.log(arr.map((n) => makeName()));


//고차함수 pipe / compose => 피타고라스정의
