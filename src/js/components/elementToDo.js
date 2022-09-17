import { createEl } from '../helpers/createEl';
import { path } from '../../assets/initWords';
import { createCategorySVG } from '../helpers/createCategorySVG';

export const elementToDo = ({ name, createDate, category, content, expDate, id }) => {

  const createId = (index) => {
    switch (index) {
      case 0: return 'name'
      case 2: return 'category'
      case 3: return 'content'
      case 4: return 'expDate'
    }
  }

  const columns = [name, createDate, category, content, expDate].map((el, index) => {
    const temp = createEl({
      tagName: 'p', className: `elementText ${index === 0 ? 'elementText__title' : ''}`, attributes: { id: `${createId(index)}${id}` }
    });
    temp.insertAdjacentHTML('beforeend', el);
    return temp.outerHTML
  }).join('');

  const icons = ['edit', 'archive', 'delete'].map(el => {
    const icon = createEl({ tagName: 'svg', className: `elementSVG`, attributes: { key: el, id: id, viewBox: "0 0 24 24", preserveAspectRatio: "none" } });
    icon.insertAdjacentHTML('beforeend', `<path d="${path[el]}"></path>`);
    return icon.outerHTML
  }).join('');

  const elToDo = createEl({ tagName: 'div', className: 'headerContainer headerContainer__el', attributes: { id: `div${id}` } });
  elToDo.insertAdjacentHTML('beforeend', [createCategorySVG(category, id).outerHTML, columns, icons].join(''));

  return elToDo
}