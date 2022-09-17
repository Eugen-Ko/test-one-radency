import { handlerTableToDo } from './handlerTableToDo';
import { handlerModalNewEdit, handlerCancelNewEdit } from './handlerModalNewEdit';
import { handlerCreateBtn } from './handlerCreateBtn';
import { handlerTableStat } from './handlerTableStat';

export const createListeners = () => {

  const refs = {
    tableToDo: document.getElementById('tableTodo'),
    tableStat: document.getElementById('tableStat'),
    createBtn: document.getElementById('createBtn'),
    modalNewEdit: document.getElementById('modalForm'),
    btnCancelNewEdit: document.getElementById('btnCancelNewEdit'),
  }

  refs.tableToDo.addEventListener('click', handlerTableToDo, false);
  refs.modalNewEdit.addEventListener('submit', handlerModalNewEdit, false);
  refs.btnCancelNewEdit.addEventListener('click', handlerCancelNewEdit, false);
  refs.createBtn.addEventListener('click', handlerCreateBtn, false);
  refs.tableStat.addEventListener('click', handlerTableStat, false);
}
