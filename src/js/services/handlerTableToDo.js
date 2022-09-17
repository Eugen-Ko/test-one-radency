import { readLocalStorage } from "./readLocalStorage";
import { writeLocalStorage } from "./writeLocalStorage";
import { refreshTable } from "../helpers/refreshTable";

export const handlerTableToDo = (e) => {
  let currentEl;
  if (['svg', 'path'].includes(e.path[0].nodeName)) { currentEl = e.path[0].nodeName === 'path' ? e.target.parentNode : e.target }
  if (currentEl) actionSwitcher(currentEl.id, currentEl.attributes.key.value);
}

const actionSwitcher = (id, action) => {
  switch (action) {
    case 'edit': editEl(id); break;
    case 'archive': archiveEl(id); break;
    case 'delete': deleteEl(id); break;
  }
}

const editEl = (id) => {
  const currentEl = readLocalStorage().find(el => el.id === id);

  document.getElementById('modalTitle').setAttribute('key', `${id}`);
  document.getElementById('modalTitle').innerHTML = 'Edit record';

  document.getElementById('inputName').value = `${currentEl.name}`;
  document.getElementById('selectCategory').value = `${currentEl.category}`;
  document.getElementById('inputContent').value = `${currentEl.content}`;
  document.getElementById('inputDate').value = `${currentEl.expDate}`;

  const modal = document.getElementById('modal_new_edit');
  modal.classList.remove('modal__hidden');
}

const archiveEl = (id) => {
  const newList = readLocalStorage().map(el => el.id === id ? { ...el, isArch: true } : el)
  writeLocalStorage(newList);
  refreshTable();
}

const deleteEl = (id) => {
  const currentList = readLocalStorage().filter(item => item.id !== id);
  writeLocalStorage(currentList);
  refreshTable();
}
