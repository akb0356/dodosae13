import { Valuable, Ivaluable } from "./valuable";

export const printValue = <T>(o: Ivaluable<T>): void => console.log(o.value);
export { Ivaluable, Valuable };
