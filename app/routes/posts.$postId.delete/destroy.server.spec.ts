import { describe, it } from 'vitest'
import { faker } from '@faker-js/faker';

import { call } from "./destroy.server";

describe("destroy Post", () => {
  const prisma = vPrisma.client;
  const postId = faker.string.uuid()

  beforeEach(async () => {
    await prisma.post.create({data:{id: postId, title: faker.lorem.words(5), content: faker.lorem.words(10)}})
  });

  it("destroy", async () => {
    await call({id: postId, })
    const post = await prisma.post.findUnique({where: {id: postId}})
    expect(post).toBeNull()
  })
});
