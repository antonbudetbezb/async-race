import { addAnimation } from "./addAnimation";
import { fetchDrive } from "./fetchDrive";
import { fetchVelocity } from "./fetchVelocity";
import { finishAnimation } from "./finishAnimation";

export async function startEngine(e:Event): Promise<string> {
  const target = e.target as HTMLElement;
  target.classList.add('disabled');
  target.nextElementSibling?.classList.remove('disabled');
  target.removeEventListener('click', startEngine);
  const id = (target.parentElement?.parentElement?.
    previousElementSibling?.lastElementChild as HTMLElement).innerText;
  const velocity = await fetchVelocity(id);

  addAnimation(velocity, target);
  fetchDrive(id).then(res => {
    if (res === 'stop'){
      finishAnimation(target)
    }
    if (res === 'finish') {
      target.classList.remove('disabled');
      fetch('http://127.0.0.1:3000/winners', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        wins: 1,
        time: velocity
      })
  })
    }
  });
  return 'ok';
}