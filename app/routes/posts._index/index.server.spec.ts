import { describe, it } from 'vitest'
import { faker } from '@faker-js/faker';

import { call } from "./index.server";

describe("index Posts", () => {
  const prisma = vPrisma.client;

  beforeEach(async () => {
    await prisma.post.create({data: {title: faker.lorem.words(5), content: faker.lorem.words(10)}})
    await prisma.post.create({data: {title: faker.lorem.words(5), content: faker.lorem.words(10)}})
    await prisma.post.create({data: {title: faker.lorem.words(5), content: faker.lorem.words(10)}})
  });

  it("index", async () => {
    const posts = await call()
    expect(posts.length).toEqual(3)
  })
});
