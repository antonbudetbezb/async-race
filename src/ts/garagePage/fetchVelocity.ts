import { Engine } from "../types";

export async function fetchVelocity(id: string): Promise<string> {
  let responce = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`, {
    method: 'PATCH',
  })

  const data: Engine = await responce.json();
  return data.velocity.toString();
}