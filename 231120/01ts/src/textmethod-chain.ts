import { Calculator } from "./methodchain";

let calc = new Calculator();
let result = calc.add(1).add(2).multiply(3).multiply(4);
console.log(result);
