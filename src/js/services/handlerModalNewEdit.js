import { readLocalStorage } from "./readLocalStorage";
import { writeLocalStorage } from "./writeLocalStorage";
import { path } from "../../assets/initWords";
import { choicePath } from "../helpers/choicePath";
import { calcStat } from "./calcStat";
import { elementToDo } from "../components/elementToDo";

export const handlerModalNewEdit = (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  const key = document.getElementById('modalTitle').attributes.key.value;
  if (key === 'new') newRecord(data)
  else editRecord(data, key);
  closeModal();
}

export const handlerCancelNewEdit = (e) => {
  closeModal();
}

const closeModal = () => {
  const modal = document.getElementById('modal_new_edit');
  modal.classList.add('modal__hidden');
}

const editRecord = (data, key) => {

  const rewriteStat = (currentList, index, decrement = 0) => {
    const newStat = calcStat(currentList).find(el => el.category === currentList[index].category).active - decrement
    document.getElementById(`${currentList[index].category}_active`).innerHTML = `${newStat}`;
  }

  const currentList = readLocalStorage();
  const index = currentList.findIndex(el => el.id === key);

  rewriteStat(currentList, index, 1);

  currentList[index].name = data.name;
  currentList[index].category = data.category;
  currentList[index].content = data.content;
  currentList[index].expDate += data.date;

  rewriteStat(currentList, index, 0);

  writeLocalStorage(currentList)

  document.getElementById(`svg${key}`).attributes.d.value = path[choicePath(data.category)]
  document.getElementById(`name${key}`).innerHTML = data.name;
  document.getElementById(`category${key}`).innerHTML = data.category;
  document.getElementById(`content${key}`).innerHTML = data.content;
  document.getElementById(`expDate${key}`).innerHTML = data.date ? `${data.date}, ` : '';
}

const newRecord = (data) => {
  const newRecord = {
    name: data.name ? data.name : '',
    createDate: new Date().toLocaleString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    category: data.category ? data.category : '',
    content: data.content ? data.content : '',
    expDate: data.expDate ? data.expDate : '',
    isArch: false,
    id: String(Date.now()),
  }

  const currentList = readLocalStorage();
  currentList.push(newRecord);
  writeLocalStorage(currentList);
  document.getElementById('tableTodo').innerHTML += elementToDo(newRecord).outerHTML;

  const newStat = calcStat(currentList).find(el => el.category === data.category).active
  document.getElementById(`${data.category}_active`).innerHTML = `${newStat}`

}
