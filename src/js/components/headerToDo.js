import { path } from '../../assets/initWords';
import { createEl } from '../helpers/createEl';

export const headerToDo = () => {
  const headerToDoContainer = createEl({ tagName: 'div', className: 'headerContainer' });

  const emptyDiv = createEl({ tagName: 'div' });
  const name = createEl({ tagName: 'p', className: 'headerText' });
  name.insertAdjacentHTML('beforeend', 'Name');
  const created = createEl({ tagName: 'p', className: 'headerText' });
  created.insertAdjacentHTML('beforeend', 'Created');
  const category = createEl({ tagName: 'p', className: 'headerText' });
  category.insertAdjacentHTML('beforeend', 'Category');
  const content = createEl({ tagName: 'p', className: 'headerText' });
  content.insertAdjacentHTML('beforeend', 'Content');
  const dates = createEl({ tagName: 'p', className: 'headerText' });
  dates.insertAdjacentHTML('beforeend', 'Dates');

  const allArch = createEl({ tagName: 'svg', className: 'headerSVG', attributes: { id: 'allArch', viewBox: "0 0 24 24", preserveAspectRatio: "none" } });
  allArch.insertAdjacentHTML('beforeend', `<path d="${path.archive}"></path>`);
  const allDelete = createEl({ tagName: 'svg', className: 'headerSVG', attributes: { id: 'allDelete', viewBox: "0 0 24 24", preserveAspectRatio: "none" } });
  allDelete.insertAdjacentHTML('beforeend', `<path d="${path.delete}"></path>`);

  headerToDoContainer.insertAdjacentHTML('beforeend', [emptyDiv.outerHTML, name.outerHTML, created.outerHTML, category.outerHTML, content.outerHTML, dates.outerHTML, emptyDiv.outerHTML, allArch.outerHTML, allDelete.outerHTML].join(''));

  return headerToDoContainer;
}