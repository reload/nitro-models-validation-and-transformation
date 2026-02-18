import z from "zod";

type AgeCategory = "Kitten" | "Adult" | "Senior";

// The Cat is the representation of a Cat to send to client.
export class Cat {
  public static readonly schema = z.object({
    name: z.string(),
    age: z.number(),
    breed: z.string(),
  });

  constructor(
    public name: string,
    public ageCategory: AgeCategory,
    public breed: string,
  ) {}

  private static getageCategory(age: number): AgeCategory {
    if (age < 1) return "Kitten";
    if (age < 7) return "Adult";
    return "Senior";
  }

  // The client is not interested in the age but in the age category.
  // The client is also not interested in the id of the cat -
  // that is why the is is not part of the constructor.
  // Also neither the id nor the age is returned in the `transform` function.
  public static create<TData>(data: TData) {
    const { name, ageCategory, breed } = this.schema
      .transform(({ name, age, breed }) => {
        return { name, ageCategory: this.getageCategory(age), breed };
      })
      .parse(data);
    return new this(name, ageCategory, breed);
  }
}
