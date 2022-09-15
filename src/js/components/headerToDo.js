import { createEl } from '../helpers/createEl';

export const headerToDo = () => {
  const headerToDoContainer = createEl({ tagName: 'div', className: 'headerContainer' });

  return headerToDoContainer;
}