import { Category } from "./category";

describe("Category Testes", () => {
  test("constructor of category", () => {
    const category = new Category("Movie");
    expect(category.name).toBe("Movie");
  });
});
