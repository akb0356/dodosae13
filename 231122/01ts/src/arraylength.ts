// 제네릭 타입
//종합병원 = general hospital

//배열의 타입을 정의 할 때, number[]
//고정타입

// const sample = ["hello", 1, 2, { name: "park" }];

// 타입변수 : type variable

export const arrayLength = <T>(array: T[]): number => {
  return array.length;
};

export const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) == 0;
