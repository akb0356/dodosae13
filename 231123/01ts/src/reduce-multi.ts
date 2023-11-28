import { range } from "./range";
let reduceMultiply: number[] = range(1, 11).reduce(
  (result, value) => result * value,
  1
);
