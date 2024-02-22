import { prisma } from "../../db.server";

export async function call({title, content}: {title: string} & {content: string}) {
  // TODO: validation
  return await prisma.post.create({
    data: {
      title: title,
      content: content,
    }
  });
}
