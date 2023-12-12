export interface Isquare {
  tag: "square";
  size: number;
}
export interface Irect {
  tag: "rectangle";
  width: number;
  height: number;
}
export interface Icircle {
  tag: "circle";
  radius: number;
}



export type IShape = Isquare | Irect | Icircle;
