import type { ActionFunctionArgs } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import { call } from "./create.server"

export const action = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData()
  const title = form.get("title")
  const content = form.get("content")
  // TODO: validation
  const post = await call({ title, content})
  return redirect(`/posts/${post.id}`)
}

export default function PostNew() {
  return (
    <div>
      <h1>New Post</h1>
      <form method="post">
        <input
          style={{ display: "block" }}
          name="title"
          placeholder="title"
          type="text"
        />
        <input
          style={{ display: "block" }}
          name="content"
          placeholder="content"
          type="text"
        />
        <button style={{ display: "block" }} type="submit">
          Post
        </button>
      </form>
    </div>
  )
}
