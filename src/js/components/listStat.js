import { elementStat } from './elementStat';
import { readLocalStorage } from '../services/readLocalStorage';
import { calcStat } from '../helpers/calcStat';

export const listStat = () => {
  const list = calcStat(readLocalStorage())
  return list.map(el => { return elementStat(el).outerHTML }).join('');
}
