// import { refs } from './refs';
import { handlerToDo } from './handlerToDo';

export const createListeners = () => {

  const refs = {
    tableToDo: document.getElementById('tableTodo'),
    tableStat: document.getElementById('tableStat'),
    button: document.getElementById('button'),
  }

  refs.tableToDo.addEventListener('click', handlerToDo, false);
}