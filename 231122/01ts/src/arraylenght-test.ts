import { arrayLength, isEmpty } from "./arraylength";
let numArray: number[] = [1, 2, 3];
let strArray: string[] = ["Hello", "World"];

type IPesrson = { name: string; age?: number };
let personArray: IPerson[] = [{ name: "Jack" }, { name: "Jane", age: 32 }];

console.log(
  arrayLength(numArray), // 3
  arrayLength(strArray), // 2
  arrayLength(personArray), // 2
  isEmpty([]), // true
  isEmpry([1]) // false
);
