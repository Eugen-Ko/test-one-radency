export const writeLocalStorage = (data) => {
  try {
    localStorage.setItem('data', JSON.stringify(data));
  } catch (error) {
    console.log(error.message);
  }
}
