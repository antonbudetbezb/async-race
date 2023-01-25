import { fetchGarage } from "./fetchGarage";

export async function setCarsAmount(): Promise<string> {
  fetchGarage().then(promise => {
    const count = document.querySelector('.garage__title_count') as HTMLElement;
    count.innerText = promise.length.toString();
  })
  return '';
}