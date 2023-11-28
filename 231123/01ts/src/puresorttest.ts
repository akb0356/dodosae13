import { pureSort } from "./puresort";

let beforeSort: number[] = [6, 2, 9, 0];
const afterSort: number[] = pureSort(beforeSort);
console.log(beforeSort, afterSort);
