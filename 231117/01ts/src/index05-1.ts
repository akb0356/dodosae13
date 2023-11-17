import INameable from "./index05";

let obj: object = { name: "jack" };
//generic 형식...?
let name0 = (<{ name: string }>obj).name;
let name1 = (<INameable>obj).name;
let name2 = (obj as INameable).name;

console.log(name0, name1, name2)