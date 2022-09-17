export const handlerCreateBtn = () => {
  document.getElementById('modalTitle').setAttribute('key', `new`);
  document.getElementById('modalTitle').innerHTML = 'New record';

  document.getElementById('inputName').value = ``;
  document.getElementById('selectCategory').value = `Task`;
  document.getElementById('inputContent').value = ``;
  document.getElementById('inputDate').value = ``;

  const modal = document.getElementById('modal_new_edit');
  modal.classList.remove('modal__hidden');
}
