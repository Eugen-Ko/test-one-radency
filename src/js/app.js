import { createEl } from './helpers/createEl';

import { headerToDo } from './components/headerToDo';
import { headerStat } from './components/headerStat';




export const app = () => {
  const rootEl = document.getElementById('root');

  const tableToDo = createEl({ tagName: 'div', className: 'tableTodo', attributes: { id: 'tableTodo' } });
  const buttonCreate = createEl({ tagName: 'button', className: 'button', attributes: { id: 'buttonCreate' } });
  const tableStat = createEl({ tagName: 'div', className: 'tableStat' });

  rootEl.insertAdjacentHTML('afterbegin', [headerToDo().outerHTML, tableToDo.outerHTML, buttonCreate.outerHTML, headerStat().outerHTML, tableStat.outerHTML].join(''));
  return rootEl;
}
