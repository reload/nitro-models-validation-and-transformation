import z from "zod";

// The remote model for the Cat returned by the remote source.
export class CatRemote {
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
