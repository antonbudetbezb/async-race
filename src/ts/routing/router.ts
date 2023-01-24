import { addErrorPage } from "./pages/errorPage";
import { addMainPage } from "./pages/mainPage";
import { addWinnersPage } from "./pages/winnersPage";

export const addRouter = (route: string) => {
  const main = document.querySelector('.main') as HTMLElement;
  main.innerHTML = '';
  localStorage.setItem('currentPage', route);

  switch (route) {
      case '#/':
          window.location.hash = '/';
          main.append(addMainPage());
          break;
      case '#/winners':
          window.location.hash = '/winners';
          main.append(addWinnersPage());
          break;
      default:
          window.location.hash = '#/404';
          return main.append(addErrorPage());
  }
}