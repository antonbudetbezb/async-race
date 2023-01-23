export function addMainPage(): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  wrapper.innerText = 'Garage';
  return wrapper;
}