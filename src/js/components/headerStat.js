import { createEl } from '../helpers/createEl';
import { headerStatColumn } from '../../assets/initWords';

export const headerStat = () => {

  const columns = headerStatColumn.map(el => {
    const temp = createEl({ tagName: 'p', className: 'headerText' });
    temp.insertAdjacentHTML('beforeend', el)
    return temp.outerHTML
  }).join('');

  const headerStatContainer = createEl({ tagName: 'div', className: 'headerContainer headerContainer__stat' });

  headerStatContainer.insertAdjacentHTML('beforeend', columns);

  return headerStatContainer;
}