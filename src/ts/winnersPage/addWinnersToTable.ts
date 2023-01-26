import { carSVG } from "../data/carSVG";
import { fetchGarage } from "../garagePage/fetchGarage"
import { fetchCar } from "./fetchCar";
import { fetchWinners } from "./fetchWinners"

export async function addWinnersToTable(table: HTMLElement): Promise<string> {
  const winners = fetchWinners().then(data => data);

  (await winners).forEach(async winner => {
    const car = await fetchCar(winner.id);

    const carWrapper = document.createElement('tr');
    carWrapper.classList.add('cars-row');
    
    const carNumber = document.createElement('td');
    carNumber.innerText = winner.id.toString();

    const carImg = document.createElement('td');
    const img = new DOMParser().parseFromString(carSVG, 'image/svg+xml').documentElement;
    img.style.fill = car.color;
    carImg.append(img);

    const carName = document.createElement('td');
    carName.innerText = car.name;

    const carWins = document.createElement('td');
    carWins.innerText = winner.wins.toString();

    const carTime = document.createElement('td');
    carTime.innerText = winner.time.toString();

    carWrapper.append(carNumber, carImg, carName, carWins, carTime)
    table.append(carWrapper);
  })
  return 'ok'
}

