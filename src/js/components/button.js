import { createEl } from '../helpers/createEl';

export const button = () => {
  const buttonCreate = createEl({ tagName: 'button', className: 'button', attributes: { id: 'buttonCreate' } });
  buttonCreate.insertAdjacentHTML('afterbegin', 'Create Note');
  return buttonCreate;
}