//CssImport
import './style.scss'
import { addBaseStructure } from './ts/routing/addBaseStruct'
import { addRouter } from './ts/routing/router'

addBaseStructure();
window.addEventListener('hashchange', () => {
  const hash: string = window.location.hash;
  addRouter(hash); 
});