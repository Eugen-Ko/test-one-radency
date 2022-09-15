import { createEl } from '../helpers/createEl';
import { createCategorySVG } from '../helpers/createCategorySVG';

export const elementStat = ({ category, active, archived }) => {

  const columns = [category, '', active, '', archived, '', '', ''].map((el, index) => {
    const temp = createEl({
      tagName: 'p', className: `elementText ${index === 0 ? 'elementText__title' : ''} ${archived && index === 4 ? 'activeArch' : ''}`,
      attributes: { id: index === 4 ? `${category}` : '' }
    });
    temp.insertAdjacentHTML('beforeend', String(el));
    return temp.outerHTML
  }).join('');

  const elToDo = createEl({ tagName: 'div', className: 'headerContainer headerContainer__el' });
  elToDo.insertAdjacentHTML('beforeend', [createCategorySVG(category).outerHTML, columns].join(''));

  return elToDo
}