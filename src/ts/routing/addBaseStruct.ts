export function addBaseStructure():void {
  const currentPage = localStorage.getItem('currentPage') as string;
  console.log(currentPage)
  if (currentPage == null) {
    localStorage.setItem('currentPage', window.location.hash);
  }
  const body = document.querySelector('body');
  body?.append(addHeader(), ...createOtherStructure());
}

function addHeader():HTMLElement {
  const header = document.createElement('header');
  header.className = 'header';

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  const buttonsWrapper = document.createElement('div');
  buttonsWrapper.className = 'buttons-wrapper';

  const btnGarage = document.createElement('button');
  btnGarage.className = 'button';
  btnGarage.textContent = 'To garage';
  btnGarage.addEventListener('click', () => {
    window.location.hash = '/';
  })

  const btnWinners = document.createElement('button');
  btnWinners.className = 'button';
  btnWinners.textContent = 'To winners';
  btnWinners.addEventListener('click', () => {
    window.location.hash = '/winners';
  })

  buttonsWrapper.append(btnGarage, btnWinners);
  wrapper.append(buttonsWrapper);
  header.append(wrapper);

  return header;
}

function createOtherStructure():Array<HTMLElement> {
  let mainElement = document.createElement("main");
  mainElement.classList.add("main");

  let footerElement = document.createElement("footer");
  footerElement.classList.add("footer");

  return [mainElement, footerElement];
}