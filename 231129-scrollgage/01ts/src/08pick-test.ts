import { pick } from "./07pick";

const obj = {
  name: "jane",
  age: 22,
  city: "seoul",
  country: "kroea",
};

console.log(pick(obj, ['name', 'age']));
