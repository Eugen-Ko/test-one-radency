import { initialToDo } from '../../assets/initialToDo';
import { elementStat } from './elementStat';

export const listStat = () => {
  return initialToDo.map(el => { return elementStat(el).outerHTML }).join('');
}