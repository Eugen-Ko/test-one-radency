import { createEl } from '../helpers/createEl';
import { path } from '../../assets/initWords';
import { choiceSVG } from '../helpers/choiceCategorySVG';

export const elementToDo = ({ name, createDate, category, content, expDate, statArch, id }) => {

  const categorySvg = createEl({ tagName: 'svg', className: 'categorySVG', attributes: { viewBox: "0 0 24 24", preserveAspectRatio: "none" } });
  categorySvg.insertAdjacentHTML('beforeend', `<path d="${path[choiceSVG(category)]}"></path>`);

  const categoryContainerSVG = createEl({ tagName: 'div', className: 'categoryContainerSVG' });
  categoryContainerSVG.insertAdjacentHTML('beforeend', categorySvg.outerHTML);

  const nameEl = createEl({ tagName: 'p', className: 'elementText elementText__title' });
  nameEl.insertAdjacentHTML('beforeend', name);
  const created = createEl({ tagName: 'p', className: 'elementText' });
  created.insertAdjacentHTML('beforeend', createDate);
  const categoryEl = createEl({ tagName: 'p', className: 'elementText' });
  categoryEl.insertAdjacentHTML('beforeend', category);
  const contentEl = createEl({ tagName: 'p', className: 'elementText' });
  contentEl.insertAdjacentHTML('beforeend', content);
  const datesEl = createEl({ tagName: 'p', className: 'elementText' });
  datesEl.insertAdjacentHTML('beforeend', expDate);

  const editEl = createEl({ tagName: 'svg', className: 'elementSVG edit', attributes: { id: id, viewBox: "0 0 24 24", preserveAspectRatio: "none" } });
  editEl.insertAdjacentHTML('beforeend', `<path d="${path.create}"></path>`);
  const archEl = createEl({ tagName: 'svg', className: 'elementSVG arch', attributes: { id: id, viewBox: "0 0 24 24", preserveAspectRatio: "none" } });
  archEl.insertAdjacentHTML('beforeend', `<path d="${path.archive}"></path>`);
  const deleteEl = createEl({ tagName: 'svg', className: 'elementSVG del', attributes: { id: id, viewBox: "0 0 24 24", preserveAspectRatio: "none" } });
  deleteEl.insertAdjacentHTML('beforeend', `<path d="${path.delete}"></path>`);

  const elToDo = createEl({ tagName: 'div', className: 'headerContainer headerContainer__el' });
  elToDo.insertAdjacentHTML('beforeend', [categoryContainerSVG.outerHTML, nameEl.outerHTML, created.outerHTML, categoryEl.outerHTML, contentEl.outerHTML, datesEl.outerHTML, editEl.outerHTML, archEl.outerHTML, deleteEl.outerHTML].join(''));

  return elToDo
}