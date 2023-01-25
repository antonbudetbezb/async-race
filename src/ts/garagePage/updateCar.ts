import { addMainPage } from "../routing/pages/mainPage";

export async function updateCar(e: Event): Promise<string> {
  const button = e.target as HTMLElement;
  const id = (button.nextSibling as HTMLElement).innerText;
  const color = (button.previousSibling as HTMLInputElement).value;
  const name = (button.previousSibling?.previousSibling as HTMLInputElement).value;

  fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: 'PUT',
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
  return 'ok'
}