import { readLocalStorage } from "./readLocalStorage";
import { writeLocalStorage } from "./writeLocalStorage";
import { refreshTable } from "../helpers/refreshTable";

export const handlerModalNewEdit = (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  const key = document.getElementById('modalTitle').attributes.key.value;
  if (key === 'new') newRecord(data)
  else editRecord(data, key);
  handlerCancelNewEdit();
}

export const handlerCancelNewEdit = (e) => {
  const modal = document.getElementById('modal_new_edit');
  modal.classList.add('modal__hidden');
}

const editRecord = (data, key) => {
  const currentList = readLocalStorage();
  const index = currentList.findIndex(el => el.id === key);

  currentList[index].name = data.name;
  currentList[index].category = data.category;
  currentList[index].content = data.content;
  currentList[index].expDate = data.date;

  writeLocalStorage(currentList);
  refreshTable();
}

const newRecord = (data) => {
  console.log(data);
  const newRecord = {
    name: data.name ? data.name : '',
    createDate: new Date().toLocaleString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    category: data.category ? data.category : '',
    content: data.content ? data.content : '',
    expDate: data.date ? data.date : '',
    isArch: false,
    id: String(Date.now()),
  }

  const currentList = readLocalStorage();
  currentList.push(newRecord);
  writeLocalStorage(currentList);
  refreshTable();
}
