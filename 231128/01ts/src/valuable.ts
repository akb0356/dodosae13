import { Ivaluable } from "./ivaluable";

export class Valuable<T> implements Ivaluable<T> {
  constructor(public value: T) {}
}

export {Ivaluable}

