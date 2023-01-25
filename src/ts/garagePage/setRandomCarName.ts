import { carNames } from "../data/carNames";

export function setRandomCarName(): string {
  return `${carNames.mark[generateRandomNumber()]} ${carNames.model[generateRandomNumber()]}`
}

function generateRandomNumber(): number {
  const min = Math.ceil(0);
  const max = Math.floor(9);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}