import { calcArea } from "./12-2interface";
import { Irect, IShape, Icircle, Isquare } from "./12interface";

const square: Isquare = {
  tag: "square",
  size: 10,
};
const rec: Irect = {
  tag: "rectangle",
  width: 4,
  height: 5,
};
const circle: Icircle = {
  tag: "circle",
  radius: 10,
};

console.log(calcArea(square),calcArea(rec),calcArea(circle))
