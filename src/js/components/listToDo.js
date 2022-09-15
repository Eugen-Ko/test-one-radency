import { initialToDo } from '../../assets/initialToDo';
import { elementToDo } from './elementToDo';

export const listToDo = () => {
  return initialToDo.map(el => { return elementToDo(el).outerHTML }).join('');
}