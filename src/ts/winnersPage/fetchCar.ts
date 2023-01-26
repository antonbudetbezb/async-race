import { Car } from "../types";

export async function fetchCar(id: number): Promise<Car> {
  const response = await fetch(`http://127.0.0.1:3000/garage/${id.toString()}`, {
      method: 'GET',
  });

  const data = await response.json();
  return data
}