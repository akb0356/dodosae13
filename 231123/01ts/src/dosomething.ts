import { resultType } from "./resulttype";

export const doSomething = (): resultType => {
  try {
    throw new Error('some error occurs...')
  } catch (e) {
    return [false, e.message];
  }
};
