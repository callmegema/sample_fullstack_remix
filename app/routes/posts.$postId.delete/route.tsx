import { redirect, type ActionFunctionArgs } from "@remix-run/node"
import { call } from "./destroy.server"

export const action = async ({ params }: ActionFunctionArgs) => {
  await call({ id: params.postId })
  return redirect("/posts")
}
