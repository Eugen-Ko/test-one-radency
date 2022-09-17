import { listStat } from "../components/listStat";
import { listToDo } from "../components/listToDo";

export const refreshTable = () => {
  document.getElementById('tableTodo').innerHTML = listToDo();
  document.getElementById('tableStat').innerHTML = listStat();
}