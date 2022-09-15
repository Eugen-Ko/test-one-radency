import { createEl } from '../helpers/createEl';

export const headerStat = () => {

  const emptyDiv = createEl({ tagName: 'div' });
  const nameCategory = createEl({ tagName: 'p', className: 'headerText' });
  nameCategory.insertAdjacentHTML('beforeend', 'Name Category');
  const active = createEl({ tagName: 'p', className: 'headerText' });
  active.insertAdjacentHTML('beforeend', 'Active');
  const archived = createEl({ tagName: 'p', className: 'headerText' });
  archived.insertAdjacentHTML('beforeend', 'Archived');

  const headerStatContainer = createEl({ tagName: 'div', className: 'headerContainer' });

  headerStatContainer.insertAdjacentHTML('beforeend', [emptyDiv.outerHTML, nameCategory.outerHTML, emptyDiv.outerHTML, active.outerHTML, emptyDiv.outerHTML, archived.outerHTML, emptyDiv.outerHTML, emptyDiv.outerHTML, emptyDiv.outerHTML].join(''));

  return headerStatContainer;
}