import { Car } from "../types";

export async function fetchGarage(): Promise<Array<Car>> {
  const response = await fetch('http://127.0.0.1:3000/garage', {
      method: 'GET',
  });

  const data = await response.json();
  return data
}