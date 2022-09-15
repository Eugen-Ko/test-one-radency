import { path } from '../../assets/initWords';
import { createEl } from '../helpers/createEl';
import { headerToDoColumn } from '../../assets/initWords';

export const headerToDo = () => {
  const headerToDoContainer = createEl({ tagName: 'div', className: 'headerContainer' });

  const columns = headerToDoColumn.map(el => {
    const temp = createEl({ tagName: 'p', className: 'headerText' });
    temp.insertAdjacentHTML('beforeend', el)
    return temp.outerHTML
  }).join('');

  const allArch = createEl({ tagName: 'svg', className: 'headerSVG', attributes: { id: 'allArch', viewBox: "0 0 24 24", preserveAspectRatio: "none" } });
  allArch.insertAdjacentHTML('beforeend', `<path d="${path.archive}"></path>`);
  const allDelete = createEl({ tagName: 'svg', className: 'headerSVG', attributes: { id: 'allDelete', viewBox: "0 0 24 24", preserveAspectRatio: "none" } });
  allDelete.insertAdjacentHTML('beforeend', `<path d="${path.delete}"></path>`);

  headerToDoContainer.insertAdjacentHTML('beforeend', [columns, allArch.outerHTML, allDelete.outerHTML].join(''));

  return headerToDoContainer;
}