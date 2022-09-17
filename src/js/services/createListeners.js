import { handlerToDo } from './handlerToDo';
import { handlerModalNewEdit, handlerCancelNewEdit } from './handlerModalNewEdit';
import { handlerCreateBtn } from './handlerCreateBtn';

export const createListeners = () => {

  const refs = {
    tableToDo: document.getElementById('tableTodo'),
    tableStat: document.getElementById('tableStat'),
    createBtn: document.getElementById('createBtn'),
    modalNewEdit: document.getElementById('modalForm'),
    btnCancelNewEdit: document.getElementById('btnCancelNewEdit'),
  }

  refs.tableToDo.addEventListener('click', handlerToDo, false);
  refs.modalNewEdit.addEventListener('submit', handlerModalNewEdit, false);
  refs.btnCancelNewEdit.addEventListener('click', handlerCancelNewEdit, false);
  refs.createBtn.addEventListener('click', handlerCreateBtn, false);
}
