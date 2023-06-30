import { Dog } from '../models/Dog.model'

class DogsService {
  async getAll(): Promise<Dog[]> {
    return Dog.findAll();
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
