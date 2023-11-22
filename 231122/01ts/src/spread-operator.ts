let array1: number[] = [1];
let array2: number[] = [2, 3];

//서로 다른 2개 이상의 복수의 배열을 하나의 배열로 합치는 여ㅓ가지 방법들 중에 전개연산자. << ...

let mergeArray: number[] = [...array1, ...array2];
console.log(mergeArray);

