import { createEl } from '../helpers/createEl';
import { createCategorySVG } from '../helpers/createCategorySVG';

export const elementStat = ({ category, active, archive }) => {

  const createID = (el, index) => {
    switch (index) {
      case 0: return `${el}`
      case 2: return `${el}_active`
      case 4: return `${el}_archive`
      default: return ''
    }
  };

  const columns = [category, '', active, '', archive, '', '', ''].map((el, index) => {
    const temp = createEl({
      tagName: 'p', className: `elementText ${index === 0 ? 'elementText__title' : ''} ${archive && index === 4 ? 'activeArch' : ''}`,
      attributes: { id: `${createID(category, index)}` }
    });
    temp.insertAdjacentHTML('beforeend', String(el));
    return temp.outerHTML
  }).join('');

  const elToDo = createEl({ tagName: 'div', className: 'headerContainer headerContainer__el' });
  elToDo.insertAdjacentHTML('beforeend', [createCategorySVG(category).outerHTML, columns].join(''));

  return elToDo
}