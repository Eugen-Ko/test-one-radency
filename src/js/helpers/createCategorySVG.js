import { path } from "../../assets/initWords";
import { createEl } from "./createEl";

const createSVG = (iconName, id) => {
  const categorySVG = createEl({ tagName: 'svg', className: 'categorySVG', attributes: { viewBox: "0 0 24 24", preserveAspectRatio: "none" } });
  categorySVG.insertAdjacentHTML('beforeend', `<path d="${path[iconName]}" id="svg${id}"></path>`);
  const categoryContainerSVG = createEl({ tagName: 'div', className: 'categoryContainerSVG' });
  categoryContainerSVG.insertAdjacentHTML('beforeend', categorySVG.outerHTML);
  return categoryContainerSVG;
}

export const createCategorySVG = (el, id = '') => {
  switch (el) {
    case 'Task': return createSVG('grocery', id);
    case 'Random Thought': return createSVG('mind', id);
    case 'Idea': return createSVG('lightbulb', id);
    case 'Quote': return createSVG('quote', id);
  }
}