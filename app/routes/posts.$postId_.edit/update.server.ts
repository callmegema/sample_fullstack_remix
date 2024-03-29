import { prisma } from "../../db.server";

export async function call({id, title, content}: {id: string} & {title: string} & {content: string}) {
  // TODO: validation
  return await prisma.post.update({
    where: {id: id},
    data: {
      title: title,
      content: content,
    }
  });
}
