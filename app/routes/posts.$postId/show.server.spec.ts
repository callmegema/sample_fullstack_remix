import { describe, it } from 'vitest'
import { faker } from '@faker-js/faker';

import { call } from "./show.server";

describe("show Posts", () => {
  const prisma = vPrisma.client;
  const postId = faker.string.uuid()
  const postTitle = faker.lorem.words(5)

  beforeEach(async () => {
    await prisma.post.create({data: {id: postId, title: postTitle, content: faker.lorem.words(10)}})
  });

  it("show", async () => {
    const post = await call({id: postId})
    expect(post.title).toEqual(postTitle)
  })
});
