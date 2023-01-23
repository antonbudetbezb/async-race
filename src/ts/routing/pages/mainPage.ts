import { getCarsAmount } from "../../garage/getAmount";
import { getCars } from "../../garage/getCars";
import { getPageNumber } from "../../garage/getPageNumber";

export function addMainPage(): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  
  wrapper.append(addMenu(), addGarage());
  return wrapper;
}

function addMenu():HTMLElement {
  const el = document.createElement('div');
  el.classList.add('menu');

  const createButtons = document.createElement('div');
  createButtons.classList.add('create-car');
  createButtons.append(...addButtons());

  const updateButtons = document.createElement('div');
  updateButtons.classList.add('update-car');
  updateButtons.append(...addButtons());

  el.append(createButtons, updateButtons, addButtonsBlock())
  return el;

  function addButtons(): Array<HTMLElement> {
    const carName = document.createElement('input');
    carName.classList.add('car__name');
    carName.type = 'text';

    const carColor = document.createElement('input');
    carColor.classList.add('car__color');
    carColor.type = 'color';

    const carButton = document.createElement('input');
    carButton.className = 'car__button button button_blue';
    carButton.type = 'button';

    return [carName, carColor, carButton];
  }

  function addButtonsBlock(): HTMLElement {
    const el = document.createElement('div');
    el.classList.add('buttons-block');
  
    const wrapper = document.createElement('div');
    wrapper.classList.add('buttons-wrapper');
  
    const fButton = document.createElement('button');
    fButton.classList.add('button');
    fButton.innerText = 'Race';
  
    const sButton = document.createElement('button');
    sButton.classList.add('button');
    sButton.innerText = 'Reset';
  
    const tButton = document.createElement('button');
    tButton.classList.add('button');
    tButton.innerText = 'Generate cars';
  
    wrapper.append(fButton, sButton, tButton);
    el.append(wrapper);
    return el;
  }
}

function addGarage():HTMLElement {
  const el = document.createElement('section');
  el.classList.add('garage');

  const garageTitle = document.createElement('div');
  garageTitle.classList.add('garage__title');
  const titleName = document.createElement('span');
  titleName.classList.add('garage__title_name');
  titleName.innerText = 'Garage: ';
  const titleCount = document.createElement('span');
  titleCount.classList.add('garage__title_count');
  titleCount.innerText = getCarsAmount();
  garageTitle.append(titleName, titleCount);

  const pagination = document.createElement('div');
  pagination.classList.add('pagination');
  const pagName = document.createElement('span');
  pagName.classList.add('pagination__title');
  pagName.innerText = 'Page: ';
  const pagNumber = document.createElement('span');
  pagNumber.classList.add('pagination__num');
  pagNumber.innerText = getPageNumber();
  pagination.append(pagName, pagNumber);

  el.append(garageTitle, pagination, ...getCars());
  return el;
}