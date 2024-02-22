import { describe, it } from 'vitest'

describe("check", () => {
  it("show env without error", () => {
    console.log(`env: ${process.env.NODE_ENV}`);
  });

  const prisma = vPrisma.client;

  test("Add user", async () => {
    const createdUser = await prisma.user.create({
      data: {
        name: "user1",
        email: "user1@example.com",
      },
    });

    expect(
      await prisma.user.findFirst({
        where: {
          id: createdUser.id,
        },
      })
    ).toStrictEqual(createdUser);
    expect(await prisma.user.count()).toBe(1);
  });

  // Each test case is isolated in a transaction and also rolled back, so it is not affected by another test result.
  test("Count user", async () => {
    expect(await prisma.user.count()).toBe(0);
  });
});
