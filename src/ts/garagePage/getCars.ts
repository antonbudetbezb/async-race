import { carSVG } from "../data/carSVG";
import { fetchGarage } from "./fetchGarage";
import { Car } from "../types";
import { updateCar } from "./updateCar";
import { addMainPage } from "../routing/pages/mainPage";

export async function getCars():Promise<string> {
  fetchGarage().then((response: Array<Car>) => {
    const garage = document.querySelector('.garage');
    response.forEach((item: Car) => {
      const car = document.createElement('div');
      car.classList.add('car');
      
      car.append(addCarInfo(item), addCarTrack(item));
      garage?.append(car)
    })
  });

  return 'ok'
}

function addCarInfo(item: Car):HTMLElement {
  const carInfo = document.createElement('div');
  carInfo.classList.add('car__info');

  const carID = document.createElement('span');
  carID.innerText = item.id.toString();
  carID.classList.add('car_id');
  carID.style.display = 'none';

  const carButtons = document.createElement('span');
  carButtons.classList.add('car-buttons');
  const buttonsWrapper = document.createElement('div');
  buttonsWrapper.classList.add('buttons-wrapper');
  const fButton = document.createElement('button');
  fButton.className = ('button button_blue');
  fButton.innerText = 'Select';
  fButton.addEventListener('click', (e: Event) => {
    const nameInput = document.querySelector('.update-car .car__name') as HTMLInputElement;
    nameInput.classList.remove('disabled');
    nameInput.value = item.name;

    const colorInput = document.querySelector('.update-car .car__color') as HTMLInputElement;
    colorInput.classList.remove('disabled');
    colorInput.value = item.color;

    const buttonInput = document.querySelector('.update-car .car__button') as HTMLInputElement;
    buttonInput.classList.remove('disabled');
    buttonInput.after(carID);
    buttonInput.addEventListener('click', updateCar)
  });

  const sButton = document.createElement('button');
  sButton.className = ('button button_blue');
  sButton.innerText = 'Remove';
  sButton.addEventListener('click', (e:Event) => {
    fetch(`http://127.0.0.1:3000/garage/${item.id}`, {
      method: 'DELETE',
  }).then(response => {
    const main = document.querySelector('.main') as HTMLElement;
    main.innerHTML = '';
    main.append(addMainPage())
  })
  })
  buttonsWrapper.append(fButton, sButton);
  carButtons.append(buttonsWrapper);

  const carName = document.createElement('span');
  carName.classList.add('car_name');
  carName.innerText = item.name;

  

  carInfo.append(carButtons, carName, carID);
  return carInfo
}

function addCarTrack(item: Car):HTMLElement {
  const carTrack = document.createElement('div');
  carTrack.classList.add('car__track');

  const buttons = document.createElement('div');
  buttons.classList.add('buttons-wrapper');
  const fButton = document.createElement('button');
  fButton.className = ('button button_active');
  fButton.innerText = 'A';
  const sButton = document.createElement('button');
  sButton.className = ('button button_inactive');
  sButton.innerText = 'B';
  buttons.append(fButton, sButton);

  const spriteWrapper = document.createElement('div');
  spriteWrapper.classList.add('sprite-wrapper');

  const carSprite = new DOMParser().parseFromString(carSVG, 'image/svg+xml').documentElement;
  carSprite.classList.add('car-sprite');
  carSprite.style.fill = item.color;

  const flagSprite = document.createElement('img');
  flagSprite.classList.add('flag-sprite');
  flagSprite.src = '../../assets/racing-flag.png';

  const trackSprite = document.createElement('div');
  trackSprite.classList.add('track-sprite');
  spriteWrapper.append(carSprite, flagSprite, trackSprite)

  carTrack.append (buttons, spriteWrapper)
  return carTrack;
}