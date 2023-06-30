import { createPaginationQuery } from '../utils/pagination';
import { Dog } from '../models/Dog.model'
import { createSortQuery } from '../utils/sort';

class DogsService {
  async getAll(limit: string, pageNumber: string, attribute: string, order: string) {
    const sortQuery = createSortQuery(attribute, order);
    const paginationQuery = createPaginationQuery(limit, pageNumber);
    const finalQuery: any = { ...paginationQuery, ...sortQuery }
    const dogs = await Dog.findAndCountAll(finalQuery);
    if (paginationQuery?.limit !== undefined && paginationQuery.offset !== undefined) {
      return {
        content: (await dogs).rows,
        totalPages: Math.ceil((await dogs).count / paginationQuery?.limit)
      }
    }
    return dogs;
  }

  async getById(id: number): Promise<Dog | null> {
    return Dog.findByPk(id);
  }

  async deleteById(id: number) {
    await Dog.destroy({ where: { id } });
    return { message: 'Dog info has been successfully deleted', id };
  }

  async create(dogCreateData: Dog): Promise<Dog> {
    return Dog.create({ ...dogCreateData });
  }

  async updateById(id: number, dogUpdateData: Dog) {
    await Dog.update(dogUpdateData, { where: { id } });
    return { message: 'Dog info has been successfully updated', id, dogUpdateData };
  }
}

export default new DogsService();
