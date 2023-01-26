import { addMainPage } from "../routing/pages/mainPage";
import { setRandomCarName } from "./setRandomCarName"
import { setRandomColor } from "./setRandomColor";
export function generateRandomCars(): void {
  const promises = [];
  for (let i = 0; i < 100; i += 1) {
    const name = setRandomCarName();
    const color = setRandomColor();
    promises.push(fetch('http://127.0.0.1:3000/garage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          color: color
        })
    }))
  };
  Promise.allSettled(promises).then((el) => {
    const main = document.querySelector('.main') as HTMLElement;
    main.innerHTML = '';
    main.append(addMainPage())
  });
}