import { writeLocalStorage } from "../services/writeLocalStorage";
import { readLocalStorage } from "../services/readLocalStorage";
import { renderListArch } from "./renderListArch";
import { refreshTable } from "./refreshTable";

export const unArchRecord = (id, category) => {
  const currentList = readLocalStorage();
  const index = currentList.findIndex(el => el.id === id);
  currentList[index].isArch = false;
  writeLocalStorage(currentList);
  renderListArch(category);
  refreshTable();
}