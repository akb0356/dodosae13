import { pureDelete } from "./pure";

const mixedArray: (string[] | { name: string })[] = [
  [],
  { name: "jack" },
  ["description"],
];
//isArray :: 배열인지 확인해주는 함수
const objectOnly = pureDelete(mixedArray, (val) => Array.isArray(val));
