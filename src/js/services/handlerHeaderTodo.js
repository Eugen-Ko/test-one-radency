import { readLocalStorage } from './readLocalStorage';
import { writeLocalStorage } from './writeLocalStorage';
import { refreshTable } from '../helpers/refreshTable';

export const handlerHeaderTodo = (e) => {
  let currentEl;
  if (['svg', 'path'].includes(e.path[0].nodeName)) { currentEl = e.path[0].nodeName === 'path' ? e.target.parentNode : e.target }
  if (currentEl) actionSwitcher(currentEl.attributes.id.value);
}

const actionSwitcher = (action) => {
  switch (action) {
    case 'allArch': allArch(); break
    case 'allDelete': allDelete(); break
  }
}

const allArch = () => {
  writeLocalStorage(readLocalStorage().map(el => { el.isArch = true; return el }));
  refreshTable();
}

const allDelete = () => {
  writeLocalStorage(readLocalStorage().filter(el => el.isArch));
  refreshTable();
}
