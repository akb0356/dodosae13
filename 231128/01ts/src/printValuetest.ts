import { printValue, Valuable } from "./printvalue";

printValue(new Valuable<number>(1))
printValue(new Valuable<boolean>(true))
printValue(new Valuable<string>('hello'))
printValue(new Valuable<number[]>([1, 2, 3]))

// 제네릭 인터페이스를 활용하여 