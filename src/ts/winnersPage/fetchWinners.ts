import { Winner } from "../types";

export async function fetchWinners(): Promise<Array<Winner>> {
  const promise = fetch(`http://127.0.0.1:3000/winners`, {
    method: 'GET',
  });
  const data = (await promise).json();
  return data;
}