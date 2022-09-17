import { elementToDo } from './elementToDo';
import { readLocalStorage } from '../services/readLocalStorage';

export const listToDo = () => {
  return readLocalStorage().filter((el) => !el.isArch)
    .map(el => { return elementToDo(el).outerHTML }).join('');
}
