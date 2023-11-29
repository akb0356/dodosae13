import { Ivaluable } from "./01ivaluable";

//Ivaluable라는 함수를 실행시켜줄 수 있는 클래스생성자
export class Valuable<T> implements Ivaluable<T> {
  constructor(public value:T) {}
}

export {Ivaluable}