//중첩함수
const calc = (value: number, cb: (arg1: number) => void) => {
  let add = (a: number, b: number) => a + b;
  function multiply(a: number, b: number) {
    return a * b;
  }
  let result = multiply(add(1, 2), value);
  cb(result);
};

calc(30, (result: number) => console.log(`result is ${result}`));
