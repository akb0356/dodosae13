import { FirstOrderFunc, SecondOrderFunc } from "./sig01";

export const add: SecondOrderFunc<number, number> =
  (x: number): FirstOrderFunc<number, number> =>
  (y: number): number =>
    x + y;
