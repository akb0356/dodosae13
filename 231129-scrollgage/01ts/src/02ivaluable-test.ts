import { Ivaluable } from "./01ivaluable";

//이렇게하면 문제는 없지만
// const printValueT = <T>(o:T) => console.log(o)
//난 o의 값을 넣고싶을 때
//extends를 썼는데 앞에는 상속 받을 애가 뒤에는 상속을 해줄 애가 나온다.
//별도 함수 생성을 위한 타입정의이기 때문에 분명히 다른 애가 Q를 따로 줬다고...?
//제네릭 타입의 제약
export const printValueT = <Q, T extends Ivaluable<Q>>(o: T) =>
  console.log(o.value);

export { Ivaluable };
