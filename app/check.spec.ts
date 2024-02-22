import { describe, it } from 'vitest'

describe("check", () => {
  it("show env without error", () => {
    console.log(`env: ${process.env.NODE_ENV}`);
  });

  const prisma = vPrisma.client;

  test("Add post", async () => {
    const post = await prisma.post.create({
      data: {
        title: "Hello World",
        content: "This is a post content",
      },
    });

    expect(
      await prisma.post.findFirst({
        where: {
          id: post.id,
        },
      })
    ).toStrictEqual(post);
    expect(await prisma.post.count()).toBe(1);
  });

  // Each test case is isolated in a transaction and also rolled back, so it is not affected by another test result.
  test("Count post", async () => {
    expect(await prisma.post.count()).toBe(0);
  });
});
