function* gen12() {
  yield 1;
  yield 2;
}

export function* gen12345() {
  //외부에서 생성해놓은 생성자를쓸 수 있다.
  yield* gen12();
  yield* [3, 4];
  yield 5;
}
