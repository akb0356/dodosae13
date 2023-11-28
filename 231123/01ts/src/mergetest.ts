// 복수의 배열이 올거면 [][]을 쓴다. 대박임.
export const mergeArray = <T>(...arrays: T[][]) => {
  let result: T[] = [];
  for (let i = 0; i < arrays.length; i++) {
    let array: T[] = arrays[i];
    result = [...result, ...array];
  }
  return result;
};
