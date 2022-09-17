import { handlerToDo } from './handlerToDo';
import { handlerModalNewEdit, handlerCancelNewEdit } from './handlerModalNewEdit';

export const createListeners = () => {

  const refs = {
    tableToDo: document.getElementById('tableTodo'),
    tableStat: document.getElementById('tableStat'),
    button: document.getElementById('button'),
    modalNewEdit: document.getElementById('modalForm'),
    btnCancelNewEdit: document.getElementById('btnCancelNewEdit'),
  }

  refs.tableToDo.addEventListener('click', handlerToDo, false);
  refs.modalNewEdit.addEventListener('submit', handlerModalNewEdit, false);
  refs.btnCancelNewEdit.addEventListener('click', handlerCancelNewEdit, false);

}