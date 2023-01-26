import { lettersArray } from "./keys";

export const findKeyIndex = (alphabet) => {
  for (let index = 0; index < 3; index++) {
    if (lettersArray[index].includes(alphabet)) {
      return [index, lettersArray[index].findIndex((element)=>element===alphabet)];
    }
  }
  return [-1, -1]
};
