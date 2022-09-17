import { readLocalStorage } from "./readLocalStorage";
import { writeLocalStorage } from "./writeLocalStorage";
import { calcStat } from "./calcStat";

export const handlerToDo = (e) => {
  let currentEl;
  if (['svg', 'path'].includes(e.path[0].nodeName)) { currentEl = e.path[0].nodeName === 'path' ? e.target.parentNode : e.target }
  if (currentEl) actionSwitcher(currentEl.id, currentEl.attributes.key.value, currentEl.parentNode.childNodes[3].textContent);
}

const actionSwitcher = (id, action, category) => {
  switch (action) {
    case 'edit': editEl(id); break;
    case 'archive': archiveEl(id, category); break;
    case 'delete': deleteEl(id, category); break;
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


const archiveEl = (id, category) => {
  const newList = readLocalStorage().map(el => el.id === id ? { ...el, isArch: true } : el)
  const newStat = calcStat(newList).find(el => el.category === category)

  if (newStat.archive) { document.getElementById(`${category}_archive`).classList.add('activeArch') }

  document.getElementById(`${category}_archive`).innerHTML = `${newStat.archive}`
  document.getElementById(`${category}_active`).innerHTML = `${newStat.active}`
  document.getElementById(`div${id}`).remove();

  writeLocalStorage(newList);
}

const deleteEl = (id, category) => {
  const currentList = readLocalStorage().filter(item => item.id !== id);
  const newStat = calcStat(currentList).find(el => el.category === category).active

  document.getElementById(`${category}_active`).innerHTML = `${newStat}`
  document.getElementById(`div${id}`).remove();

  writeLocalStorage(currentList);
}