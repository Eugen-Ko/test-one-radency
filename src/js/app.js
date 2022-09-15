import { createEl } from './helpers/createEl';

import { headerToDo } from './components/headerToDo';
import { listToDo } from './components/listToDo';
import { button } from './components/button';
import { headerStat } from './components/headerStat';
import { listStat } from './components/listStat';

export const app = () => {

  const tableToDo = createEl({ tagName: 'div', className: 'table', attributes: { id: 'tableTodo' } });
  tableToDo.insertAdjacentHTML('beforeend', listToDo());
  const tableStat = createEl({ tagName: 'div', className: 'tableStat' });
  tableStat.insertAdjacentHTML('beforeend', listStat());

  const rootEl = document.getElementById('root');
  rootEl.insertAdjacentHTML('afterbegin', [headerToDo().outerHTML, tableToDo.outerHTML, button().outerHTML, headerStat().outerHTML, tableStat].join(''));

  return rootEl;
}
