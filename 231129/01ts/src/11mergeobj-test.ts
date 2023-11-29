import { mergeObject } from "./10mergeobj";

interface Inameable {
  name: string;
}
interface Iageable {
  age: number;
}
const nameObj: Inameable = {
  name: "jack",
};
const ageObj: Iageable = {
  age: 32,
};

const nameAndAge = mergeObject(nameObj, ageObj);

console.log(nameAndAge);
