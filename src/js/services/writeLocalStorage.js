export const writeLocalStorage = (data) => {
  localStorage.setItem('data', JSON.stringify(data));
}
