import { CatRemote } from "./models/cat.remote";

export class CatsRepository {
  private cats: CatRemote[];

  constructor() {
    this.cats = [
      {
        id: 1,
        name: "Whiskers",
        age: 18,
        breed: "Siamese",
      },
      {
        id: 2,
        name: "Fluffy",
        age: 6,
        breed: "Persian",
      },
      {
        id: 3,
        name: "Mittens",
        age: 1,
        breed: "Maine Coon",
      },
      {
        id: 4,
        name: "Tigger",
        age: 19,
        breed: "Ragdoll",
      },
    ];
  }

  async getById(id: number) {
    const cat = this.cats.find((cat) => cat.id === id);
    if (!cat) throw new Error("Cat not found");
    return CatRemote.create(cat);
  }
}
