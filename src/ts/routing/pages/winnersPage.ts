export function addWinnersPage(): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  wrapper.innerText = 'Winners';
  return wrapper;
}