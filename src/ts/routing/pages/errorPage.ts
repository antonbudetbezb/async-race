export function addErrorPage(): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  wrapper.innerText = 'Error';
  return wrapper;
}