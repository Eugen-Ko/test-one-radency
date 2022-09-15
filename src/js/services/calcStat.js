import { categories } from '../../assets/initWords';

export const calcStat = (data) => {
  return Object.values(categories).map(category => {
    return {
      category: category,
      active: data.filter(el => (el.category === category && !el.isArch)).length,
      archive: data.filter(el => (el.category === category && el.isArch)).length,
    }
  })
}