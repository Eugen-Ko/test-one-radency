import { handlerTableToDo } from './handlerTableToDo';
import { handlerModalNewEdit, handlerCancelNewEdit } from './handlerModalNewEdit';
import { handlerCreateBtn } from './handlerCreateBtn';
import { handlerTableStat, handlerCloseArch, handlerModalArchList } from './handlerTableStat';

export const createListeners = () => {

  const refs = {
    tableToDo: document.getElementById('tableTodo'),
    tableStat: document.getElementById('tableStat'),
    createBtn: document.getElementById('createBtn'),
    modalNewEdit: document.getElementById('modalForm'),
    btnCancelNewEdit: document.getElementById('btnCancelNewEdit'),
    btnCloseArch: document.getElementById('btnCloseArch'),
    modalArchList: document.getElementById('modalArchList'),
  }

  refs.tableToDo.addEventListener('click', handlerTableToDo, false);
  refs.modalNewEdit.addEventListener('submit', handlerModalNewEdit, false);
  refs.btnCancelNewEdit.addEventListener('click', handlerCancelNewEdit, false);
  refs.createBtn.addEventListener('click', handlerCreateBtn, false);
  refs.tableStat.addEventListener('click', handlerTableStat, false);
  refs.btnCloseArch.addEventListener('click', handlerCloseArch, false);
  refs.modalArchList.addEventListener('click', handlerModalArchList, false);
}
