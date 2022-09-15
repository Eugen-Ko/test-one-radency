import { createEl } from '../helpers/createEl';

export const headerStat = () => {
  const headerStatContainer = createEl({ tagName: 'div', className: 'headerContainer' });

  return headerStatContainer;
}