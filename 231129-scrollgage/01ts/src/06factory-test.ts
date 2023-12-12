import { Create } from "./05factory";

class Point {
  constructor(public x: number, public y: number) {
    
  }
}

[Create(Date)].forEach((s) => console.log(s));

