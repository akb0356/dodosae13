import { FirstOrderFunc } from "./sig01";

export const inc: FirstOrderFunc<number, number> = (x: number): number => x + 1;
