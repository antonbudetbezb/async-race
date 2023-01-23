export function getCars(): Array<HTMLElement> {
  const arr = [];

  const car = document.createElement('div');
  car.classList.add('car');

  car.append(addCarInfo(), addCarTrack());
  arr.push(car);
  return arr;
}

function addCarInfo():HTMLElement {
  const carInfo = document.createElement('div');
  carInfo.classList.add('car__info');

  const carButtons = document.createElement('span');
  carButtons.classList.add('car-buttons');
  const buttonsWrapper = document.createElement('div');
  buttonsWrapper.classList.add('buttons-wrapper');
  const fButton = document.createElement('button');
  fButton.className = ('button button_blue');
  fButton.innerText = 'Select';
  const sButton = document.createElement('button');
  sButton.className = ('button button_blue');
  sButton.innerText = 'Remove';
  buttonsWrapper.append(fButton, sButton);
  carButtons.append(buttonsWrapper);

  const carName = document.createElement('span');
  carName.classList.add('car_name');
  carName.innerText = 'Name';

  carInfo.append(carButtons, carName);
  return carInfo
}

function addCarTrack():HTMLElement {
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

  const carSprite = document.createElement('img');
  carSprite.classList.add('car-sprite');
  carSprite.src = '../../assets/car.svg';

  const flagSprite = document.createElement('img');
  flagSprite.classList.add('flag-sprite');
  flagSprite.src = '../../assets/racing-flag.png';

  const trackSprite = document.createElement('div');
  trackSprite.classList.add('track-sprite');

  carTrack.append (buttons, carSprite, flagSprite, trackSprite)
  return carTrack;
}