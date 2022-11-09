import { omit } from "lodash";
import { Category } from "./category";

describe("Category Unit Tests", () => {
  test("constructor of category", () => {
    let category = new Category({ name: "Movies" });

    expect(category.name).toBe("Movies");
    let props = omit(category.props, ["created_at"]);

    expect(props).toStrictEqual({
      name: "Movies",
      description: null,
      is_active: true,
    });

    expect(category.props.created_at).toBeInstanceOf(Date);

    category = new Category({
      name: "Movie",
      description: "description",
      is_active: false,
    });

    let created_at = new Date();
    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "description",
      is_active: false,
      created_at,
    });

    category = new Category({
      name: "Movie",
      description: "other description",
    });

    expect(category.props).toMatchObject({
      name: "Movie",
      description: "other description",
    });

    category = new Category({
      name: "Movie",
      is_active: true,
    });

    expect(category.props).toMatchObject({
      name: "Movie",
      is_active: true,
    });

    category = new Category({
      name: "Movie",
      created_at,
    });

    expect(category.props).toMatchObject({
      name: "Movie",
      created_at,
    });
  });
});
