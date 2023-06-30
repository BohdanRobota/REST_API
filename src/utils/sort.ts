export const createSortQuery = (attribute: string | undefined, order: string | undefined) => {
  return attribute !== undefined ? { order: [[attribute, order]] } : {};
}