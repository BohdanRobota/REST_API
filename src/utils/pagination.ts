export const createPaginationQuery = (limit: string, pageNumber: string) => {
  const pageAsNumber = Number.parseInt(pageNumber);
  const sizeAsNumber = Number.parseInt(limit);
  let paginationQuery: any = {};
  let page = 0;
  let size = 10;
  if (!Number.isNaN(pageAsNumber) && !Number.isNaN(sizeAsNumber)) {
    if (pageAsNumber > 0) {
      page = pageAsNumber;
    }
    if (sizeAsNumber > 0 && sizeAsNumber < 10) {
      size = sizeAsNumber;
    }
    paginationQuery = { limit: size, offset: page * size };
  }
  return paginationQuery;
}