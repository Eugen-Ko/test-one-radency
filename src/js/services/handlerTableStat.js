import { renderListArch } from "../helpers/renderListArch";
import { unArchRecord } from "../helpers/unArchRecord";

export const handlerTableStat = (e) => {
  if (!['Task_archive', 'Idea_archive', 'Quote_archive', 'Random Thought_archive'].includes(e.target.id)) return
  if (e.target.textContent === '0') return

  const modal = document.getElementById('modalArchContainer');
  modal.classList.remove('modal__hidden');
  renderListArch(e.target.id.slice(0, -8));
}

export const handlerCloseArch = () => {
  const modal = document.getElementById('modalArchContainer');
  modal.classList.add('modal__hidden');
}

export const handlerModalArchList = (e) => {
  let currentEl;
  if (['svg', 'path'].includes(e.path[0].nodeName)) { currentEl = e.path[0].nodeName === 'path' ? e.target.parentNode : e.target }
  else return;
  unArchRecord(currentEl.id, currentEl.parentNode.childNodes[3].textContent);
}
