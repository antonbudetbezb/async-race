export function addWinnersPage(): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper'); 
  
  // Title
  const winnersTitle = document.createElement('div');
  winnersTitle.classList.add('winnerstitle');
  const nameTitle = document.createElement('span');
  nameTitle.classList.add('winnerstitlename');
  nameTitle.innerText = 'Winners: ';
  winnersTitle.appendChild(nameTitle);
  const countTitle = document.createElement('span');
  countTitle.classList.add('winnerstitle__count');
  countTitle.innerText = '1';
  winnersTitle.appendChild(countTitle);
  wrapper.appendChild(winnersTitle);
  
  
  // Page
  const winnersPage = document.createElement('div');
  winnersPage.classList.add('winnerspage');
  const namePage = document.createElement('span');
  namePage.classList.add('winnerspagename');
  namePage.innerText = 'Page: ';
  winnersPage.appendChild(namePage);
  const countPage = document.createElement('span');
  countPage.classList.add('winnerspage__count');
  countPage.innerText = '1';
  winnersPage.appendChild(countPage);
  wrapper.appendChild(winnersPage);
  
  
  // Table
  const table = document.createElement('table');
  table.classList.add('winners__table');
  const firstRow = document.createElement('tr');
  firstRow.classList.add('first-row');
  const numbersCell = document.createElement('td');
  numbersCell.innerText = 'Number';
  firstRow.appendChild(numbersCell);
  const carCell = document.createElement('td');
  carCell.innerText = 'Car';
  firstRow.appendChild(carCell);
  const nameCell = document.createElement('td');
  nameCell.innerText = 'Name';
  firstRow.appendChild(nameCell);
  const winCell = document.createElement('td');
  winCell.innerText = 'Wins';
  firstRow.appendChild(winCell);
  const timeCell = document.createElement('td');
  timeCell.innerText = 'Best time';
  firstRow.appendChild(timeCell);

  table.appendChild(firstRow);

  const carsRow = document.createElement('tr');
  carsRow.classList.add('cars-row');
  table.appendChild(carsRow);

  wrapper.appendChild(table);

  return wrapper;
}