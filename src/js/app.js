import { createEl } from './helpers/createEl';

import { headerToDo } from './components/headerToDo';
import { listToDo } from './components/listToDo';
import { button } from './components/button';
import { headerStat } from './components/headerStat';
import { listStat } from './components/listStat';
import { initialLocalStorage } from './services/initialLocalStorage';
import { modalNewEdit } from './components/modalNewEdit';
import { modalArch } from './components/modalArch';

export const app = () => {

  initialLocalStorage()

  const tableToDo = createEl({ tagName: 'div', className: 'table', attributes: { id: 'tableTodo' } });
  tableToDo.insertAdjacentHTML('beforeend', listToDo());
  const tableStat = createEl({ tagName: 'div', className: 'table table__stat', attributes: { id: 'tableStat' } });
  tableStat.insertAdjacentHTML('beforeend', listStat());

  const rootEl = document.getElementById('root');
  rootEl.append(headerToDo(), tableToDo, button(), headerStat(), tableStat, modalNewEdit(), modalArch());

  return rootEl;
}
