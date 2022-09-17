export const readLocalStorage = () => {
  return JSON.parse(localStorage.getItem('data'));
}
