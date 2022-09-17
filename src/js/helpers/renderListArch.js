import { createEl } from './createEl';
import { readLocalStorage } from '../services/readLocalStorage';
import { path } from '../../assets/initWords';
import { elementToDo } from '../components/elementToDo';

export const renderListArch = (category) => {
  const currentListHTML = readLocalStorage().filter((el) => (el.category === category && el.isArch))
    .map(el => {
      let temp = elementToDo(el);
      temp.lastChild.remove();
      temp.lastChild.remove();
      temp.lastChild.remove();
      const icon = createEl({ tagName: 'svg', className: `elementSVG`, attributes: { key: "unArch", id: el.id, viewBox: "0 0 24 24", preserveAspectRatio: "none" } });
      icon.insertAdjacentHTML('beforeend', `<path d="${path.unArchive}"></path>`);
      temp.appendChild(icon);
      return temp.outerHTML
    }).join('');
  document.getElementById('modalArchList').innerHTML = currentListHTML;
}