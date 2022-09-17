import { createEl } from "../helpers/createEl"

export const modalNewEdit = () => {

  const title = createEl({ tagName: "p", className: "modalTitle", attributes: { id: "modalTitle" } })

  const titleName = createEl({ tagName: "p", className: "modalText" });
  titleName.insertAdjacentHTML('beforeend', 'Name');
  const inputName = createEl({ tagName: "input", className: "input inputName", attributes: { id: "inputName", name: 'name' } });

  const titleCategory = createEl({ tagName: "p", className: "modalText" });
  titleCategory.insertAdjacentHTML('beforeend', 'Category');
  const selectCategory = createEl({ tagName: "select", className: "input selectCategory", attributes: { id: "selectCategory", name: 'category' } });
  selectCategory.append(...['Task', 'Idea', 'Quote', 'Random Thought'].map(el => {
    const temp = createEl({ tagName: "option", attributes: { value: `${el}` } });
    temp.insertAdjacentHTML('beforeend', `${el}`);
    return temp
  }));

  const titleContent = createEl({ tagName: "p", className: "modalText" });
  titleContent.insertAdjacentHTML('beforeend', 'Content');
  const inputContent = createEl({ tagName: "input", className: "input inputName", attributes: { id: "inputContent", name: 'content' } });

  const titleDate = createEl({ tagName: "p", className: "modalText" });
  titleDate.insertAdjacentHTML('beforeend', 'Date');
  const inputDate = createEl({ tagName: "input", className: "input inputDate", attributes: { id: "inputDate", name: 'date' } });

  const btnCancel = createEl({ tagName: "button", className: "modalBtn", attributes: { id: "btnCancelNewEdit", type: "button" } });
  btnCancel.insertAdjacentHTML('beforeend', 'Cancel');

  const btnSave = createEl({ tagName: "button", className: "modalBtn", attributes: { id: "btnSave", type: "submit" } });
  btnSave.insertAdjacentHTML('beforeend', 'Save');

  const btnContainer = createEl({ tagName: "div", className: "modalBtnContainer" });
  btnContainer.append(btnCancel, btnSave);

  const modalForm = createEl({ tagName: "form", className: "modalForm", attributes: { id: 'modalForm' } });
  modalForm.append(titleName, inputName, titleCategory, selectCategory, titleContent, inputContent, titleDate, inputDate, btnContainer)

  const modalWindow = createEl({ tagName: "div", className: "modalWindow", attributes: { id: "modalWindow" } });
  modalWindow.append(title, modalForm);

  const modalContainer = createEl({ tagName: "div", className: "modal modal__hidden", attributes: { id: 'modal_new_edit' } });
  modalContainer.appendChild(modalWindow);

  return modalContainer


}
