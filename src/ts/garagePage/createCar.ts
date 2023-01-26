import { addMainPage } from "../routing/pages/mainPage";

export function createCar(event: Event):void {
  const target = event.target as HTMLElement;
  const color = (target.previousSibling as HTMLInputElement).value;
  const name = (target.previousSibling?.previousSibling as HTMLInputElement).value;
  fetch('http://127.0.0.1:3000/garage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        color: color
      })
  }).then(response => {
    const main = document.querySelector('.main') as HTMLElement;
    main.innerHTML = '';
    main.append(addMainPage())
  })
}