import { describe, it } from 'vitest'
import { faker } from '@faker-js/faker';

import { call } from "./create.server";

describe("create Post", () => {

  it("create", async () => {
    const title = faker.lorem.words(5)
    const content = faker.lorem.words(10)
    const post = await call({title, content})

    expect(post.title).toEqual(title)
    expect(post.content).toEqual(content)
  })
});
