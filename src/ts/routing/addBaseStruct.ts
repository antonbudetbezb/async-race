export function addBaseStructure():void {
  const garageButton = document.querySelector('.buttons-wrapper .button');
  garageButton?.addEventListener('click', () => {
    window.location.hash = '/';
  })

  const winnerButton = garageButton?.nextElementSibling;
  winnerButton?.addEventListener('click', () => {
    window.location.hash = '/winners';
  })
}