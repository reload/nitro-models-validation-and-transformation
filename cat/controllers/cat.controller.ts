import { CatsRepository } from "../cat.repository";
import { CatService } from "../services/cat.service";

export class CatController {
  private catService: CatService;

  constructor() {
    this.catService = new CatService(new CatsRepository());
  }

  async getById(id: number) {
    return this.catService.getCat(id);
  }
}
