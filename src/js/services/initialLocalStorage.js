import { initialToDo } from "../../assets/initialToDo";
import { writeLocalStorage } from "./writeLocalStorage";

export const initialLocalStorage = () => {
  if (!localStorage.getItem('data')) {
    if (initialToDo)
      writeLocalStorage(initialToDo)
    else writeLocalStorage([])
  }
}
