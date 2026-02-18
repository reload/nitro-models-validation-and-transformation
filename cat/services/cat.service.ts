import { CatLocal } from "cat/models/cat.local";
import { CatsRepository } from "../cat.repository";
import { Cat } from "cat/models/cat";

export class CatService {
  constructor(private repository: CatsRepository) {}

  async getLocalCat(id: number) {
    const remoteCat = await this.repository.getById(id);
    if (!remoteCat) throw new Error("Cat not found");
    return CatLocal.create(remoteCat);
  }

  async getCat(id: number) {
    const localCat = await this.getLocalCat(id);
    return Cat.create(localCat);
  }
}
