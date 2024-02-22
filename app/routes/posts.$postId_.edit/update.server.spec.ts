import { describe, it } from 'vitest'
import { faker } from '@faker-js/faker';

import { call } from "./update.server";

describe("update Post", () => {
  const prisma = vPrisma.client;
  const postId = faker.string.uuid()

  beforeEach(async () => {
    await prisma.post.create({data:{id: postId, title: faker.lorem.words(5), content: faker.lorem.words(10)}})
  });

  it("update", async () => {
    const newTitle = faker.lorem.words(5)
    const newContent = faker.lorem.words(10)
    const post = await call({id: postId, title: newTitle, content: newContent})

    expect(post.title).toEqual(newTitle)
    expect(post.content).toEqual(newContent)
  })
});
