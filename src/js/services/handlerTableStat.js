export const handlerTableStat = (e) => {

  if (!['Task_archive', 'Idea_archive', 'Quote_archive', 'Random Thought_archive'].includes(e.target.id)) return
  if (e.target.textContent === '0') return

  console.log('rabotaem');
}
