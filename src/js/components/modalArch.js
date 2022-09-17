import { createEl } from '../helpers/createEl';

export const modalArch = () => {
  const title = createEl({ tagName: "p", className: "modalTitle", attributes: { id: "modalTitle" } })
  title.insertAdjacentHTML('beforeend', 'Archiving records')

  const arhList = createEl({ tagName: "div", className: "modalArchList", attributes: { id: "modalArchList" } })

  const btnClose = createEl({ tagName: "button", className: "modalBtn", attributes: { id: "btnCloseArch", type: "button" } });
  btnClose.insertAdjacentHTML('beforeend', 'Close');

  const btnContainer = createEl({ tagName: "div", className: "modalBtnContainer" });
  btnContainer.append(btnClose);

  const modalWindow = createEl({ tagName: "div", className: "modalWindow modalWindow__arch", attributes: { id: "modalArhWindow" } });
  modalWindow.append(title, arhList, btnContainer);

  const modalContainer = createEl({ tagName: "div", className: "modal modal__hidden modal__archive", attributes: { id: 'modalArchContainer' } });
  modalContainer.appendChild(modalWindow);

  return modalContainer
}
