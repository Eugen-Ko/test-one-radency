import { initialToDo } from '../../assets/initialToDo';
import { elementToDo } from './elementToDo';

export const listToDo = () => {
  const listToDo = initialToDo.map(el => { return elementToDo(el).outerHTML }).join('');
  return listToDo
}