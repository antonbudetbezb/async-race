import { startEngine } from "./startEngine";

export function resetCar(e: Event): void {
  const target = e.target as HTMLElement;
  const car = target.parentElement?.nextElementSibling?.firstElementChild as HTMLElement;
  target.classList.add('disabled');
  target.previousElementSibling?.classList.remove('disabled');
  target.previousElementSibling?.addEventListener('click', startEngine);
  target.removeEventListener('click', resetCar);
  const id = (target.parentElement?.parentElement?.
    previousElementSibling?.lastElementChild as HTMLElement).innerText;
  let responce = fetch(`http://127.0.0.1:3000/engine?id=${id}&status=stopped`, {
    method: 'PATCH',
  }).then(res => {
    car.style.transition = '';
    car.style.left = '0%';
  })
}