import { path } from "../../assets/initWords";
import { createEl } from "./createEl";

const createSVG = (iconName) => {
  const categorySVG = createEl({ tagName: 'svg', className: 'categorySVG', attributes: { viewBox: "0 0 24 24", preserveAspectRatio: "none" } });
  categorySVG.insertAdjacentHTML('beforeend', `<path d="${path[iconName]}"></path>`);
  const categoryContainerSVG = createEl({ tagName: 'div', className: 'categoryContainerSVG' });
  categoryContainerSVG.insertAdjacentHTML('beforeend', categorySVG.outerHTML);
  return categoryContainerSVG;
}

export const createCategorySVG = (el) => {
  switch (el) {
    case 'Task': return createSVG('grocery');
    case 'Random Thought': return createSVG('mind');
    case 'Idea': return createSVG('lightbulb');
    case 'Quote': return createSVG('quote');
  }
}