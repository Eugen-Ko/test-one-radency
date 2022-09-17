export const choicePath = (category) => {
  switch (category) {
    case 'Task': return 'grocery'
    case 'Random Thought': return 'mind'
    case 'Idea': return 'lightbulb'
    case 'Quote': return 'quote'
  }
}
