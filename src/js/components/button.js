import { createEl } from '../helpers/createEl';

export const button = () => {
  const buttonCreate = createEl({ tagName: 'button', className: 'button', attributes: { id: 'button' } });
  buttonCreate.insertAdjacentHTML('afterbegin', 'Create Note');
  return buttonCreate;
}