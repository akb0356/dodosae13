//제네릭인터페이스 :: 무엇이 들어올지 모를때는 T를 넣는데 그러려면 이름 뒤에 <T>붙여야함
export interface Ivaluable<T> {
  value: T
}