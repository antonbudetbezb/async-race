import './style.scss'
import { addBaseStructure } from './ts/routing/addBaseStruct'
import { addRouter } from './ts/routing/router'

addBaseStructure();

const currentPage = localStorage.getItem('currentPage') as string;
addRouter(currentPage); 

window.addEventListener('hashchange', () => {
  const hash: string = window.location.hash;
  addRouter(hash);
});