import { IShape } from "./12interface";

export const calcArea = (shape: IShape):number => {
  switch (shape.tag) {
    case "square":
      return shape.size * shape.size;
  }
  switch (shape.tag) {
    case "rectangle":
      return shape.width * shape.height;
  }
  switch (shape.tag) {
    case "circle":
      return shape.radius * shape.radius;
  }
  return 0;
};
