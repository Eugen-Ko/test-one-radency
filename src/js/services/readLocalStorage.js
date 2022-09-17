export const readLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem('data'));
  } catch (error) {
    console.log(error.message);
  }
}
