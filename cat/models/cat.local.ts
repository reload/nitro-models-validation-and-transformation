import z from "zod";

// The local model for the Cat entity used internally.
// You could argue whether this model is needed at all, since it replicates the remote model.
export class CatLocal {
  public static readonly schema = z.object({
    id: z.number(),
    name: z.string(),
    age: z.number(),
    breed: z.string(),
  });

  constructor(
    public id: number,
    public name: string,
    public age: number,
    public breed: string,
  ) {}

  public static create<TData>(data: TData) {
    const { id, name, age, breed } = this.schema.parse(data);
    return new this(id, name, age, breed);
  }
}
